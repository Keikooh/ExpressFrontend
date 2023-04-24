import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      enableBackground: "new 0 0 56 56",
    }}
    viewBox="0 0 56 56"
    {...props}
  >
    <Path
      d="M53 28C53 14.2 41.8 3 28 3S3 14.2 3 28s11.2 25 25 25 25-11.2 25-25z"
      style={{
        fill: "none",
        stroke: "#212f5b",
        strokeWidth: 6,
        strokeMiterlimit: 10,
      }}
    />
    <Path
      d="M36 36 20 20m0 16 16-16"
      style={{
        fill: "none",
        stroke: "#212f5b",
        strokeWidth: 6,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }}
    />
  </Svg>
);
export default Cancelar;
