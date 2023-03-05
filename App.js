import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';
import Category from './src/Components/Category';

import ConfirmationCodeScreen from './src/Components/Screens/ConfirmationCode';

import SignInScreen from './src/Components/Screens/SignIn';

const {Dimensions} = require('react-native');

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Category />
      </View>
    );
  }
}

//
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: 20,
  },
});
