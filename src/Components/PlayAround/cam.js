import React from 'react';
import Svg, {Circle} from 'react-native-svg';
export function CamIcon(props) {
  return (
    <Svg height="50%" width="50%" viewBox="0 0 100 100">
      <Circle
        cx="50"
        cy="50"
        r="50"
        stroke="purple"
        strokeWidth=".5"
        fill="violet"
      />
    </Svg>
  );
}
