import { View, Text, StyleSheet } from 'react-native';

import React from 'react';
import {
	VictoryAxis,
	VictoryPie,
	VictoryBar,
	VictoryChart,
	VictoryLabel,
} from 'victory-native';
import Layout from '../components/Layout';

const HomeScreen = () => {
	return (
		<Layout>
			<Text style={styles.title}>Recientes</Text>

			<Text style={styles.title}>Ventas</Text>

			<View style={styles.chartPie}>
				<View
					style={{
						height: 'auto',
						borderWidth: 1,
						borderColor: 'purple',
						padding: 0,
					}}
				>
					<VictoryPie
						width={300}
						animate={{ duration: 500 }}
						colorScale={['#212F5B', '#78CBE8']}
						data={data}
						innerRadius={50}
					/>
				</View>

				<VictoryChart domainPadding={10} width={350} height={350}>
					<VictoryAxis
						dependentAxis
						style={{ grid: { stroke: 'black', strokeDasharray: '4, 4' } }}
					/>

					<VictoryBar
						animate
						style={{ data: { fill: '#78CBE8' } }}
						domain={{ y: [0, 400] }}
						data={[
							{ x: 'VIDRAZUL02', y: 350 },
							{ x: 'VIDRVERD03', y: 175 },
							{ x: 'VIDRNEGR05', y: 210 },
							{ x: 'VIDRROSA02', y: 73 },
						]}
						barWidth={35}
					/>
				</VictoryChart>
			</View>
		</Layout>
	);
};

const styles = StyleSheet.create({
	title: {
		fontWeight: 'bold',
		fontSize: 20,
		marginBottom: 10,
		textAlign: 'left',
	},
	chartPie: {
		backgroundColor: 'white',
		borderRadius: 10,
		marginTop: 20,

		alignItems: 'center',
	},
});

const data = [
	{ x: 1, y: 3, label: 'Aluminio' },
	{ x: 2, y: 7, label: 'Cristal' },
];

export default HomeScreen;
