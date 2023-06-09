import {
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Picker } from '@react-native-picker/picker';
import Dialog from 'react-native-dialog';

// Importing svg
import  Checkmark from '../assets/svg/Checkmark';

import Layout from '../components/Layout';
import { saveMaterial, getMaterial, updateMaterial } from '../api';

const MaterialFormScreen = ({route, navigation}) => {
	const [material, setmaterial] = useState({
		type: route.params.prevScreenName === 'Aluminium stock' ? 'Aluminio' : 'Vidrio',
		large: '',
		width: '',
		amount: '',
		cost: '',
		thickness: '',
		color: 'verde',
	});
	const [dialogVisibility, setdialogVisibility] = useState(false);
	const [updating, setupdating] = useState(false)

	const handleChange = (property, value) =>
		setmaterial({ ...material, [property]: value });

	const handleSubmit = async () => {
		try {
			if(!updating){
				await saveMaterial(material);
			} else{
				try {
					await updateMaterial(route.params.id, material);
				} catch (error) {
					console.log(error);
				}
			}
		} catch (error) {
			console.log(error)	
		}
	};

	useEffect(() => {
		if(route.params && route.params.id){
			setupdating(true)
			navigation.setOptions({headerTitle: `Actualizar ${route.params.prevScreenName === 'Aluminium stock' ? 'aluminio': 'vidrio'}`})
		
			const prueba = async () => {
				const material = await getMaterial(route.params.id);
				setmaterial(
					{
						type: material.type,
						large: material.large,
						width: material.width,
						amount: material.amount,
						cost: material.cost,
						thickness: material.thickness,
						color: material.color,
					})
			}; 
			
			prueba();
		}
	}, [])
	

	return (
		<Layout>

			<Dialog.Container visible={dialogVisibility}>
				<View style={[styles.icon, {backgroundColor: !updating ? '#47D5A2' : '#FFA500'}]}><Checkmark color='white' size={40}/></View>
				<Text style={styles.text}>Material {!updating ? 'registrado' : 'actualizado'} correctamente</Text>
				<View style={styles.buttonsContainer}>
				<Dialog.Button
					style={[styles.okButton,{backgroundColor: !updating ? '#47D5A2' : '#FFA500'}]}
					label='ok'
					onPress={() => {
						setdialogVisibility(false)
						navigation.navigate(route.params.prevScreenName);
						
					}}
				/>
				</View>
			</Dialog.Container>

			<View style={{ flexDirection: 'row', marginTop: 50 }}>
				<TextInput
					style={styles.input}
					keyboardType='decimal-pad'
					placeholderTextColor='#6E7582'
					placeholder='Ancho'
					onChangeText={text => handleChange('width', text)}
					value={material.width.toString()}
				/>
				<TextInput
					style={styles.input}
					keyboardType='decimal-pad'
					placeholder='Largo'
					onChangeText={text => handleChange('large', text)}
					value={material.large.toString()}
					
				/>
			</View>
			<View style={{ flexDirection: 'row' }}>
				<TextInput
					style={styles.input}
					keyboardType='decimal-pad'
					placeholder='Grosor'
					onChangeText={text => handleChange('thickness', text)}
					value={material.thickness.toString()}
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
					value={material.amount.toString()}
				/>
				<TextInput
					style={styles.input}
					keyboardType='decimal-pad'
					placeholder='Precio c/u'
					onChangeText={text => handleChange('cost', text)}
					value={material.cost.toString()}
				/>
			</View>

			<View style={{ flexDirecion: 'row', alignSelf: 'center' }}>
				<TouchableOpacity
					onPress={()=>{
						handleSubmit()
						setdialogVisibility(true)
					}} 
					style={{
						backgroundColor: 
							!updating ? '#414D9C' : '#FFA500',
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
						{ !updating ? 'guardar' : 'actualizar'}
					</Text>
				</TouchableOpacity>
			</View>
		</Layout>
	);
};

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
	icon:{
		width: 65,
		height: 65,
		borderRadius: 60,
		justifyContent: 'center',
		alignItems: 'center',	
		alignSelf: 'center'
	},
	text:{
		marginTop:20,
		color:'#919191',
		fontSize:12,
		textAlign: 'center',
	},
	okButton:{
		marginTop: 20,
		marginBottom: 20,
		color: 'white',
		borderRadius:16,
		paddingHorizontal: 20,
		paddingVertical: 10,
	},
});

export default MaterialFormScreen;
