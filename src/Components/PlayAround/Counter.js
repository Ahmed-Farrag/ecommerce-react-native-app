import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

export default class Counter extends Component {
  state = {
    counter: 0,
  };
  incrementHandler = () => {
    console.log('this', this.constructor.name);
    this.setState(prevState => ({counter: prevState.counter + 1}));
  };
  DecrementHandler = () => {
    this.setState(prevState => ({counter: prevState.counter - 1}));
  };
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Button title="Increment" onPress={this.incrementHandler} />
        <Text>{this.state.counter}</Text>
        <Button title="Decrement" onPress={this.DecrementHandler} />
      </View>
    );
  }
}
