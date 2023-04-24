import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={46}
    fill="none"
    {...props}
  >
    <Path
      stroke="#212F5B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={7}
      d="m4 4 14 19L4 42"
    />
  </Svg>
);
export default Combo;
