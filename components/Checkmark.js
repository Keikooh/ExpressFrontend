import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={58}
    height={48}
    fill="none"
    {...props}
  >
    <Path
      stroke="#212F5B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={10}
      d="M53 5 19.4 43 5 28.75"
    />
  </Svg>
)
export default Checkmark
