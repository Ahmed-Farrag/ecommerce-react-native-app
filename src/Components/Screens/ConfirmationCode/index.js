/**
 * craete signin comp
 * make style
 * implment input comp
 * import icon package
 * implemet AppButton comp
 */
import React from 'react';
import {Text, View} from 'react-native';
import Input from '../../Input';
import styles from './styles';

import AppButton from '../../AppButton';

export default function ConfirmationCodeScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>Enter Your Phone Number</Text>
      </View>
      <Input
        style={styles.Input}
        bordered
        placeholder="__ __ __ __"
        placeholderPosition="center"
        wrapperStyle={styles.inputWrapper}
      />
      <View style={styles.button}>
        <AppButton title="DONE" />
      </View>
    </View>
  );
}
