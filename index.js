import React, { Component } from 'react';
import preStyles from './preStyles';

export function packComponentsPropStyle(Components, styles) {
    let mergedStyles = { ...preStyles, ...styles };
    let wrappedComponents = {};
    for (let k in Components) {
        wrappedComponents[k] = packPropStyle(Components[k], mergedStyles);
    }
    return wrappedComponents;
}

export function packPropStyle(COM, styles) {
    let mergedStyles = { ...preStyles, ...styles };
    return class extends Component {
        constructor(props) {
            super(props);
            this.styleProps = {}
            for (let k in props) {
                if (k.includes && k.includes('-')) {
                    const ks = k.split("-");
                    const propName = mapAbbreviation(ks[0]);
                    let propValue = ks[1];
                    if (Number.isInteger(parseInt(propValue))) {
                        propValue = parseInt(propValue);
                    }
                    if (mergedStyles[propName] && mergedStyles[propName][propValue]) {
                        this.styleProps[propName] = mergedStyles[propName][propValue];
                    } else {
                        this.styleProps[propName] = propValue;
                    }
                } else {
                    if (mergedStyles[k]) {
                        this.styleProps = { ...this.styleProps, ...mergedStyles[k] };
                    }
                }
            }
        }
        render() {
            const { children, style } = this.props;
            const props = this.props;
            return (
                <COM
                    {...props}
                    style={[this.styleProps, style]}
                >
                    {children}
                </COM>
            )
        }
    }
}

function mapAbbreviation(str) {
    let ret = '';
    switch (str) {
        case 'paddingH':
            ret = 'paddingHorizontal';
            break;
        case 'paddingV':
            ret = 'paddingVertical';
            break;
        case 'marginH':
            ret = 'marginHorizontal';
            break;
        case 'marginV':
            ret = 'marginVertical';
            break;
        case 'bg':
            ret = 'backgroundColor';
        default:
            ret = str;
    }
    return ret;
}