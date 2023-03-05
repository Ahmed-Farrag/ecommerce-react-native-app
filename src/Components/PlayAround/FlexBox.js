import React from 'react';
import {View} from 'react-native';

export default function FlexBox(props) {
  return (
    <View
      style={{
        width: 50,
        height: 50,
        backgroundColor: props.color,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: props.color,
      }}
    />
  );
}

export function Layout1(props) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginStart: 50,
        marginEnd: 50,
      }}>
      <FlexBox color="blue" />
      <FlexBox color="green" />
      <FlexBox color="yellow" />
      <FlexBox color="red" />
      <FlexBox color="orange" />
    </View>
  );
}

export function Layout2(props) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 120,
        marginBottom: 120,
      }}>
      <FlexBox color="blue" />
      <FlexBox color="green" />
      <FlexBox color="yellow" />
      <FlexBox color="red" />
      <FlexBox color="orange" />
    </View>
  );
}

export function Layout3(props) {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginStart: 60,
          marginEnd: 60,
        }}>
        <FlexBox color="blue" />
        <FlexBox color="green" />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginStart: 60,
          marginEnd: 60,
        }}>
        <FlexBox color="yellow" />
        <FlexBox color="red" />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <FlexBox color="orange" />
      </View>
    </View>
  );
}

export function Layout4(props) {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginStart: 50,
          marginEnd: 70,
        }}>
        <FlexBox color="blue" />
        <FlexBox color="green" />
        <FlexBox color="yellow" />
        <FlexBox color="red" />
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <FlexBox color="orange" />
      </View>
    </View>
  );
}
