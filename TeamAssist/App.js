import React, { Component } from 'react';
import { View, Text, StatusBar, Button, SafeAreaView } from 'react-native';
import BaseColor from './Core/BaseTheme';
import AppStack from '../TeamAssist/AppStack';
export default class App extends Component {
  render() {
    return (
      // <SafeAreaView style={{ flex: 1, backgroundColor: BaseColor.BackgroundColor }}>
      //   <View >
      //     <StatusBar translucent backgroundColor="transparent" />
          
      //   </View>
      //   <Button title="button" />
      // </SafeAreaView>
      <AppStack/>
    );
  }
}