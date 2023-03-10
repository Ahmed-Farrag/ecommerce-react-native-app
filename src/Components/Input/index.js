import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';

export default function Input(props) {
  const {
    underlined,
    underlinedColor,
    underlinedHeight,
    bordered,
    borderWidth,
    borderColor,
    borderRadius,
    placeholderPosition,
    renderIconLeft,
    renderIconRight,
    stacked,
    placeholder,
    style,
    wrapperStyle,
    iconWrapperStyle,
    ...rest
  } = props;
  return (
    <View
      style={[
        bordered && {
          borderWidth: borderWidth || 1,
          borderColor: borderColor || '#bbb',
          borderRadius: borderRadius || 5,
          padding: 5,
        },
        wrapperStyle,
      ]}>
      {stacked && <Text>{placeholder}</Text>}

      <View style={{flexDirection: 'row'}}>
        {renderIconLeft && (
          <View style={([styles.iconWrapper], iconWrapperStyle)}>
            {renderIconLeft()}
          </View>
        )}
        <TextInput
          {...rest}
          placeholder={stacked ? '' : placeholder}
          style={[
            {flex: 1, padding: 0, textAlign: placeholderPosition || 'left'},
            style,
          ]}
        />
        {renderIconRight && (
          <View style={([styles.iconWrapper], iconWrapperStyle)}>
            {renderIconRight()}
          </View>
        )}
      </View>

      {(underlined || stacked) && (
        <View
          style={{
            height: underlinedHeight || 1,
            backgroundColor: underlinedColor || '#bbb',
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
