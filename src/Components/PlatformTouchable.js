import React, {Component} from 'react';

import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  View,
} from 'react-native';

class PlatformTouchable extends Component {
  render() {
    const {style, children, ...rest} = this.props;
    const Touchable =
      Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
    // or
    // const Touchable = Platform.select({android: TouchableNativeFeedback, ios: TouchableOpacity})
    return (
      <Touchable {...this.props}>
        <View style={style}>{children}</View>
      </Touchable>
    );
  }
}
export default PlatformTouchable;
