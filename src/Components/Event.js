import React, {Component} from 'react';
import {View, Button} from 'react-native';

export default class Event extends Component {
  sayHandler = () => alert('say some thing');

  render() {
    return (
      <View>
        <Button title="say bro" onPress={this.sayHandler} />
      </View>
    );
  }
}
