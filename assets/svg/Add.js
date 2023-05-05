import React from 'react';
import { Svg, Path } from 'react-native-svg';

const Ionicon = ({ color, size }) => (
  <Svg width={size} height={size} viewBox="0 0 512 512">
    <Path
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
      d="M256 112v288M400 256H112"
    />
  </Svg>
);

export default Ionicon;