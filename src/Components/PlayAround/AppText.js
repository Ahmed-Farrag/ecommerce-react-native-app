import React, {Component} from 'react';
import {Text} from 'react-native';
export class AppText extends Component {
  render() {
    // eslint-disable-next-line react-native/no-inline-styles
    return <Text {...this.props} style={[{color: 'red'}, this.props.style]} />;
  }
}
