import React from 'react';
import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
// import {ScaledSheet} from 'react-native-size-matters';
import EStyleSheet from 'react-native-extended-stylesheet';

// $ScaledSheet

// const styles = ScaledSheet.create({
//   input: {
//     fontSize: '18@s',
//     height: '40@s',
//     borderWidth: 1,
//     borderColor: '#bbb',
//     borderRadius: 10,
//     marginBottom: 20,
//     padding: 10,
//   },
//   button: {
//     fontSize: '24@s',
//     fontWeight: 'bold',
//   },
// });

// $ EStyleSheet
const styles = EStyleSheet.create({
  input: {
    fontSize: '18rem',
    height: '40rem',
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
  },
  button: {
    fontSize: '24rem',
    fontWeight: 'bold',
  },
});
// import {rem} from '../utils/constants';
const {width} = Dimensions.get('window');

export function Input(props) {
  return (
    <TextInput
      style={
        styles.input
        // {height: 40 * rem,}
      }
      placeholder={props.placeholder}
    />
  );
}

export function SignUpScreen(props) {
  // when rotate emelator phone from computer
  const [realtimWidth, setWidth] = React.useState(width);

  React.useEffect(() => {
    Dimensions.addEventListener('change', ({window}) => {
      console.log(window.width);
      setWidth(window.width);
    });
    return () => Dimensions.removeEventListener('change');
  }, []);
  return (
    <View style={{justifyContent: 'center'}}>
      <Input placeholder="Email" />
      <View style={realtimWidth > 500 ? {flexDirection: 'row'} : null}>
        <View style={realtimWidth > 500 ? {flex: 1, marginEnd: 10} : null}>
          <Input placeholder="password" />
        </View>
        <View style={realtimWidth > 500 ? {flex: 1} : null}>
          <Input placeholder="phone" />
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text
          style={
            styles.button
            // {fontSize: scale(24), fontWeight: 'bold'}
          }>
          Sign Up
        </Text>
      </View>
    </View>
  );
}
