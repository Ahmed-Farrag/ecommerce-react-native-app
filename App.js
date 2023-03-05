import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';

import SignInScreen from './src/Components/Screens/SignIn';

const {Dimensions} = require('react-native');

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SignInScreen />
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
