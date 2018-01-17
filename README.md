# react-native-prop-style
## It is an UI tools which can convert certain props to styles. For example, 
`fontSize-40` will convert to `style={{fontSize:40}}`
`color-red` will converto `style={{color:'red'}}`


## Further more, it can define your prop to all the react-native components and all your self-defined components. 

## It have predefined some very useful and common props.
For example:
```js
<View row center>
    <Text h1>It is a head</Text>
    <Text red detail link>It is a red underline detail text</Text>
</View>
```

## You can use react-native components which support prop style directly
```js
import { Text, View } from 'react-native-prop-style/react-native';
```

## How to make your components support prop style:
```js
import React, { Component } from 'react';
import { packComponentsPropStyle,packPropStyle } from 'react-native-prop-style';

const myStyle = {
    blue: { color: '#3182C8' }
}

const class MyComponent extends Component{
    ...
}

export default (packPropStyle(MyComponent,myStyle));

```
## How to make other UI library support prop style:
```js
// my-native-base.js
import * as nativeBaseComponents from 'native-base'
import { packComponentsPropStyle,packPropStyle } from 'react-native-prop-style';

const myStyle = {
    blue: { color: '#3182C8' }
}

const cs = packComponentsPropStyle(nativeBaseComponents,myStyle);
module.exports = {
    ...cs
}

// otherFile
import { View, Button } from './my-native-base';
...
```