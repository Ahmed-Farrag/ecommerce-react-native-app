import React, {Component} from 'react';
import {Text} from 'react-native';
export default class Greeting extends Component {
  render() {
    // * props
    const {name} = this.props; // distract
    return <Text>Hello {name ? name : 'user'}</Text>;
    // <Text>Hello {this.props.name}</Text>;
  }
}
