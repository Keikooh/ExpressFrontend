import React from 'react';
import Svg, { Path, Rect, Line } from 'react-native-svg';

const Trash = ({ color = '#000', size = 24 }) => {
  return (
    <Svg viewBox="0 0 512 512" width={size} height={size}>
      <Path
        d="M432 144l-28.67 275.74A32 32 0 01371.55 448H140.46a32 32 0 01-31.78-28.26L80 144"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <Rect
        x="32"
        y="64"
        width="448"
        height="80"
        rx="16"
        ry="16"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <Line
        x1="200"
        y1="352"
        x2="312"
        y2="240"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <Line
        x1="200"
        y1="240"
        x2="312"
        y2="352"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
    </Svg>
  );
};

export default Trash;
