import React from 'react';
import {Button, Text, View} from 'react-native';

export default function FunctionalCounter(props) {
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    alert('mm');
  }, [counter]);
  const incrementHandler = () => {
    setCounter(counter + 1);
  };
  const DecrementHandler = () => {
    setCounter(counter - 1);
  };
  return (
    <View style={{alignItems: 'center'}}>
      <Button title="Increment" onPress={incrementHandler} />
      <Text>{counter}</Text>
      <Button title="Decrement" onPress={DecrementHandler} />
    </View>
  );
}
