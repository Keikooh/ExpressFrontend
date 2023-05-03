import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, { useState } from 'react';
import Dialog from 'react-native-dialog';

// Importing svg components
import Stock from '../assets/svg/Stock';
import Pricetag from '../assets/svg/Pricetag';
import Trash from '../assets/svg/Trash'; 

// Importing styles
import { ItemStyle } from '../assets/styles/ItemStyle';

const Material_Item = ({ material, handleDelete }) => {
	const [dialogVisibility, setdialogVisibility] = useState(false);
	const materialCodeName = `${material.type == 'Aluminio' ? 'ALM' : 'VDR'}${material.color.slice(0,4).toUpperCase()}${material.width},${material.large}`;

	return (
		<View style={ItemStyle.itemContainer}>

			<Dialog.Container visible={dialogVisibility}>
				
				<View style={styles.icon}><Trash color='white' size={40}/></View>
				<Text style={styles.text}>¿Estás seguro de eliminar este material?</Text>
				<View style={styles.buttonsContainer}>
				<Dialog.Button
					style={styles.cancelButton}
					color='black'
					label='Cancelar'
					onPress={() => setdialogVisibility(false)}
				/>
				<Dialog.Button
					style={styles.deleteButton}
					color='#ED6262'
					label='Eliminar'
					onPress={() =>{
						handleDelete(material._id)
					} }
				/>
				</View>
			</Dialog.Container>

			<View style={ItemStyle.materialDetails}>
				<Text style={ItemStyle.title}>{materialCodeName}</Text>
				<Text
					style={[
						ItemStyle.materialType,
						{
							backgroundColor:
								material.type === 'Aluminio' ? '#212F5B' : '#78CBE8',
						},
					]}
				>
					{material.type.toUpperCase()}
				</Text>
				<View style={{ flexDirection: 'row', margin: 5, alignItems: 'center' }}>
					<Stock
						fill='#212F5B'
						width={12}
						height={12}
						style={{ marginRight: 5 }}
					/>
					<Text>{material.amount}</Text>
				</View>
				<View
					style={{
						flexDirection: 'row',
						margin: 5,
						marginTop: -5,
						alignItems: 'center',
					}}
				>
					<Pricetag
					fill='#212F5B'
					stroke='#212F5B'
					width={12}
					height={12}
					style={{ marginRight: 5 }}/>
					<Text>{material.cost}</Text>
				</View>
			</View>

			<View style={ItemStyle.controls}>
				<TouchableOpacity
					onPress={() => setdialogVisibility(true)}
					style={[ItemStyle.button, { backgroundColor: '#ED6262' }]}
				>
					<Text style={ItemStyle.buttonText}>eliminar</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={[ItemStyle.button, { backgroundColor: '#414D9C' }]}
				>
					<Text style={ItemStyle.buttonText}>editar</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	icon:{
		backgroundColor:'#ED6262',
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
	cancelButton:{
		backgroundColor:'#ED6262',
		color: 'white',
		borderRadius:16,
		paddingHorizontal: 20,
		paddingVertical: 10,
		marginRight: 10,
	},
	deleteButton:{
		borderWidth:2,
		borderColor:'#ED6262',
		paddingHorizontal:20,
		paddingVertical:8,
		borderRadius:16
	},
	buttonsContainer: {
		marginTop: 20,
		marginBottom: 20,
		flexDirection: 'row',
		justifyContent: 'center',
	}
});

export default Material_Item;
