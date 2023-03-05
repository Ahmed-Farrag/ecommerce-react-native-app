import React from 'react';
import {Text, View} from 'react-native';
import {formatTimer} from '../utils/helperFunctions';

export default function TimerFunc(props) {
  const [second, setSecond] = React.useState(
    props.descending ? props.maxSecond : 0,
  );

  let interval;
  React.useEffect(() => {
    interval = setInterval(() => {
      setSecond(prevSecond =>
        props.descending ? prevSecond - 1 : prevSecond + 1,
      );
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [second]);

  React.useEffect(() => {
    const deadlineVal = props.descending ? 0 : props.maxSecond;
    if (second === deadlineVal) {
      clearInterval(interval);
      props.deadlineFun();
    }
  }, [second]);

  return (
    <View>
      <Text> {formatTimer(second)} </Text>
    </View>
  );
}
