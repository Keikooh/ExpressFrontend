import { View, Text, Image } from 'react-native';
import React from 'react';
import Layout from '../components/Layout';

const LoadScreen = ({ navigation }) => {
	setTimeout(() => {
		navigation.replace('Aplicacion');
	}, 3000);

	return (
		<Layout>
			<View style={{ flex: 1, justifyContent: 'center' }}>
				<Image
					source={require('../assets/images/LogoExpress.jpg')}
					style={{ width: 200 , height: 250, alignSelf: 'center' }}
				/>
			</View>
		</Layout>
	);
};

export default LoadScreen;
