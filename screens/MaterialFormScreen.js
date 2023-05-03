import {
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

import Layout from '../components/Layout';
import { saveMaterial } from '../api';

const MaterialFormScreen = ({route, navigation}) => {
	const [material, setmaterial] = useState({
		type: 'Vidrio',
		large: '',
		width: '',
		amount: '',
		cost: '',
		thickness: '',
		color: 'verde',
	});

	const handleChange = (property, value) =>
		setmaterial({ ...material, [property]: value });

	const handleSubmit = () => {
		saveMaterial(material)
			.then(data => {
				console.log(route.params);
				route.params?.onSubmit?.();
				//navigation.navigate(route.params);
			})
			.catch(error => {
				console.error(error);
			});
	};

	return (
		<Layout>
			<View style={{ flexDirection: 'row', marginTop: 50 }}>
				<TextInput
					style={styles.input}
					keyboardType='decimal-pad'
					placeholderTextColor='#6E7582'
					placeholder='Ancho'
					onChangeText={text => handleChange('large', text)}
				/>
				<TextInput
					style={styles.input}
					keyboardType='decimal-pad'
					placeholder='Largo'
					onChangeText={text => handleChange('width', text)}
				/>
			</View>
			<View style={{ flexDirection: 'row' }}>
				<TextInput
					style={styles.input}
					keyboardType='decimal-pad'
					placeholder='Grosor'
					onChangeText={text => handleChange('thickness', text)}
				/>
				<Picker
					style={styles.input}
					onChangeText={text => handleChange('color', text)}
				>
					<Picker.Item label='Verde' value='verde' />
					<Picker.Item label='Azul' value='azul' />
					<Picker.Item label='Negro' value='negro' />
				</Picker>
			</View>

			<View style={{ flexDirection: 'row' }}>
				<TextInput
					style={styles.input}
					keyboardType='numeric'
					placeholder='Existencias'
					onChangeText={text => handleChange('amount', text)}
				/>
				<TextInput
					style={styles.input}
					keyboardType='decimal-pad'
					placeholder='Precio c/u'
					onChangeText={text => handleChange('cost', text)}
				/>
			</View>

			<View style={{ flexDirecion: 'row', alignSelf: 'center' }}>
				<TouchableOpacity
					onPress={handleSubmit}
					style={{
						backgroundColor: '#414D9C',
						marginTop: 50,
						padding: 15,
						width: 150,
						borderRadius: 10,
					}}
				>
					<Text
						style={{
							fontSize: 17,
							color: 'white',
							fontWeight: 'bold',
							textAlign: 'center',
						}}
					>
						guardar
					</Text>
				</TouchableOpacity>
			</View>
		</Layout>
	);
};

<<<<<<< HEAD
export default MaterialFormScreen
=======
const styles = StyleSheet.create({
	input: {
		marginTop: 10,
		flex: 1,
		fontSize: 17,
		padding: 10,
		margin: 10,
		borderRadius: 6,
		backgroundColor: 'white',
	},
	// button:{
	//   flex:1,
	//   backgroundColor:'pink',
	//   color: 'red'
	// }
});

export default MaterialFormScreen;
>>>>>>> 744519e2d93616d5f3da7a9988883d8f61d92c20
