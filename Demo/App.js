import React from 'react';
import { packComponentsPropStyle, packPropStyle } from 'react-native-prop-style';
import { Text, View, SafeAreaView } from 'react-native-prop-style/react-native';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView flex1 center >

        <Text h1>Column Layout</Text>
        <View center column flex1>
          <Text red margin-10 flex>red</Text>
          <Text underline margin-10 padding-10 >underline</Text>
          <Text bold blue>blod</Text>
        </View>

        <Text h1>Row Layout</Text>
        <View center row flex1>
          <Text red margin-10>red</Text>
          <Text underline margin-10 padding-10 >underline</Text>
          <Text bold blue>blod</Text>
        </View>
      </SafeAreaView>
    );
  }
}