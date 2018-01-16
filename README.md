It is a library to covert certain props to styles. For example, 
`fontSize-40` will convert to `style={{fontSize:40}}`
`color-red` will converto `style={{color:'red'}}`


More important, it can define your prop to all the react-native components and all your self-defined components. And it have predefined some very useful and common props.
For example:
```
<View row center>
    <Text h1>It is a head</Text>
    <Text red detail link>It is a red underline detail text</Text>
</View>
```

You can use react-native components which support prop style directly
```
import { Text, View } from 'react-native-prop-style/react-native';
```

How to make your components support prop style:
```
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
How to make other ui library support prop style:
```
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