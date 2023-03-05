import React, {Component} from 'react';
import {View} from 'react-native';
import WelcomeScreenMainButton from './WelcomeScreenMainButton';
import WelcomeScreenMainText from './WelcomeScreenMainText';

export default class WelcomeScreen extends Component {
  render() {
    return (
      <View>
        <WelcomeScreenMainText />
        <WelcomeScreenMainButton />
      </View>
    );
  }
}
