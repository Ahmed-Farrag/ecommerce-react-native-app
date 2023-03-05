import React from 'react';
import {Text} from 'react-native';

export default function FunctionalGreeting(props) {
  const {name, greetingPhrase} = props;
  return (
    <Text>
      {greetingPhrase ? greetingPhrase : 'hello '}
      {name}
    </Text>
  );
}
