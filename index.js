import React, { Component } from 'react';

const dict = {
    color: {
        red: 'red'
    }
}

export function packComponents(Components, stylesObj) {
    let wrappedComponents = {};
    for (let k in Components) {
        wrappedComponents[k] = pack(Components[k], stylesObj);
    }
    return wrappedComponents;
}

export function pack(COM, stylesObj) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.styleProps = {}
            for (let k in props) {
                if (k.includes && k.includes('-')) {
                    const ks = k.split("-");
                    const propName = ks[0];
                    const propValue = ks[1];
                    if (dict[propName] && dict[propName][propValue]) {
                        this.styleProps[propName] = dict[propName][propValue];
                    } else {
                        this.styleProps[propName] = propValue;
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
                    style={[this.styleProps, style]}
                >
                    {children}
                </COM>
            )
        }
    }
}