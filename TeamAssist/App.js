import React, { Component } from 'react';
import { View, Text, StatusBar, Button, SafeAreaView } from 'react-native';
import {Root} from 'native-base';
import BaseColor from './Core/BaseTheme';
import AppStack from '../TeamAssist/AppStack';
export default class App extends Component {
  render() {
    return (
      <Root>
        <AppStack/>
      </Root>
    );
  }
}