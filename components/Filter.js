import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={53}
    height={53}
    fill="none"
    {...props}
  >
    <Path
      fill="#212F5B"
      d="M26.5 0C11.888 0 0 11.888 0 26.5S11.888 53 26.5 53 53 41.112 53 26.5 41.112 0 26.5 0Zm4.077 38.73h-8.154a2.038 2.038 0 0 1 0-4.076h8.154a2.038 2.038 0 1 1 0 4.077Zm6.115-8.153H16.308a2.038 2.038 0 1 1 0-4.077h20.384a2.039 2.039 0 0 1 0 4.077Zm4.077-8.154H12.231a2.038 2.038 0 1 1 0-4.077h28.538a2.038 2.038 0 1 1 0 4.077Z"
    />
  </Svg>
)
export default Filter
