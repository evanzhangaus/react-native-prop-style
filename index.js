import React, { Component } from 'react';
import preStyles from './propStyles';

export function packComponentsPropStyle(Components, styles) {
    console.log('preStyles',preStyles)
    let mergedStyles = {...preStyles, ...styles};
    let wrappedComponents = {};
    for (let k in Components) {
        wrappedComponents[k] = packPropStyle(Components[k], mergedStyles);
    }
    return wrappedComponents;
}

export function packPropStyle(COM, styles) {
    let mergedStyles = {...preStyles, ...styles};
    return class extends Component {
        constructor(props) {
            super(props);
            this.styleProps = {}
            for (let k in props) {
                if (k.includes && k.includes('-')) {
                    const ks = k.split("-");
                    const propName = ks[0];
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
                        this.styleProps = {...this.styleProps, ...mergedStyles[k]};
                    }
                }
            }
        }
        render() {
            const { children, style } = this.props;
            const props = this.props;
            console.log(COM.displayName, this.styleProps);
            return (
                <COM
                    {...props}
                    style={{...this.styleProps, ...style}}
                >
                    {children}
                </COM>
            )
        }
    }
}