import React, {Component} from 'react';
import {ActivityIndicator, Text} from 'react-native';
import PlatformTouchable from '../PlatformTouchable';
import styles from './styles';

class AppButton extends Component {
  render() {
    const {title, wrapperStyle, titleStyle, isLoading, ...rest} = this.props;
    return (
      <PlatformTouchable
        {...rest}
        disabled={isLoading}
        style={[styles.wrapper, wrapperStyle]}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Text style={[styles.title, titleStyle]}>{title}</Text>
        )}
      </PlatformTouchable>
    );
  }
}
export default AppButton;
