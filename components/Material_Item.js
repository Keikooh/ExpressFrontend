import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Dialog from 'react-native-dialog';

// Importing svg components
import Stock from '../assets/svg/Stock';
import Pricetag from '../assets/svg/Pricetag';

// Importing styles
import { ItemStyle } from '../assets/styles/ItemStyle';

const Material_Item = ({ material, handleDelete }) => {
	const [dialogVisibility, setdialogVisibility] = useState(false);

	return (
		<View style={ItemStyle.itemContainer}>

			<Dialog.Container visible={dialogVisibility}>
				<Dialog.Title>Eliminar elemento</Dialog.Title>
				<Dialog.Description>
					¿Estás seguro de que deseas eliminar este material?
				</Dialog.Description>
				<Dialog.Button
					label='Cancelar'
					onPress={() => setdialogVisibility(false)}
				/>
				<Dialog.Button
					label='Eliminar'
					onPress={() =>{
						handleDelete(material._id)
					} }
				/>
			</Dialog.Container>

			<View>
				<Text style={ItemStyle.title}>{`${material.type
					.slice(0, 4)
					.toUpperCase()}${material.color.slice(0, 4).toUpperCase()}`}</Text>
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

			<View style={{ flexDirection: 'row-reverse', alignItems: 'center' }}>
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

export default Material_Item;
