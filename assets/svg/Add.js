import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

const Add = props => (
	<Svg
		xmlns='http://www.w3.org/2000/svg'
		className='ionicon'
		viewBox='0 0 512 512'
		{...props}
	>
		<Path
			fill='none'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={32}
			d='M256 112v288m144-144H112'
		/>
	</Svg>
);

export default Add;
