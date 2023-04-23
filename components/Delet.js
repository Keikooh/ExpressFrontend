import * as React from "react"
import Svg, { Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: style */
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="Capa_1"
    x={0}
    y={0}
    style={{
      enableBackground: "new 0 0 61 67",
    }}
    viewBox="0 0 61 67"
    {...props}
  >
    <Path
      d="M22.5 14.2V8.9c0-.4.1-.8.2-1.2.2-.4.4-.7.7-1 .3-.3.6-.5 1-.7.4-.2.8-.2 1.1-.2h10c.4 0 .8.1 1.1.2.4.2.7.4 1 .7.3.3.5.6.7 1 .2.4.2.8.2 1.2v5.2m-8 8.4v29.3m-9-29.3 1 29.3m17-29.3-1 29.3M10.5 15.2 13.3 57c.1 2.4 2 4.2 4.4 4.2h25.6c2.5 0 4.3-1.8 4.4-4.2l2.8-41.8"
      className="st0"
    />
    <Path
      d="M7.5 14.3h46"
      style={{
        fill: "none",
        stroke: "#212f5b",
        strokeWidth: 5,
        strokeLinecap: "round",
        strokeMiterlimit: 10,
      }}
    />
  </Svg>
)
export default Delet
