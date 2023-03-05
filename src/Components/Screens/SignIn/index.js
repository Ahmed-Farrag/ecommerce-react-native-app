/**
 * craete signin comp
 * make style
 * implment input comp
 * import icon package and implement in android folder
 * import size-matters
 * implemet AppButton comp
 */
import React from 'react';
import {Text, View} from 'react-native';
import Input from '../../Input';
import styles from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';
import AppButton from '../../AppButton';

function renderPhoneIcon() {
  return <Icon name="call" style={styles.icon} />;
}

export default function SignInScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>Enter Your Phone Number</Text>
      </View>
      <Input
        underlined
        renderIconLeft={renderPhoneIcon}
        placeholder="Phone"
        wrapperStyle={styles.inputWrapper}
      />
      <View style={styles.button}>
        <AppButton title="DONE" />
      </View>
    </View>
  );
}
