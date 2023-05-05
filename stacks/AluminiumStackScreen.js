import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AluminiumStockScreen from '../screens/AluminiumStockScreen';
import MaterialFormScreen from '../screens/MaterialFormScreen';

import Add from '../assets/svg/Add';
const Stack = createNativeStackNavigator();

const AluminiumStackScreen = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='Aluminium stock'
				component={AluminiumStockScreen}
				options={({ navigation }) => ({
					headerStyle: { backgroundColor: '#EBEFF8' },
					headerTitle: 'Almacén aluminios',
					headerRight: () => (
						<TouchableOpacity
						style={styles.addButton}
						onPress={() => navigation.navigate('Agregar aluminio', { onSubmit: () => navigation.navigate('Aluminium stock')})}
						>
							<Add color={'white'} size={25}/>
						</TouchableOpacity>
					),
				})}
			/>
			<Stack.Screen
				name='Agregar aluminio'
				component={MaterialFormScreen}
				initialParams={{ prevScreenName: 'Aluminium stock' }}
				options={{
					headerStyle: { backgroundColor: '#EBEFF8' },
				}}
			/>
		</Stack.Navigator>
	);
};

const styles = StyleSheet.create({
	addButton:{
		backgroundColor: '#414D9C',
		paddingHorizontal: 20,
		paddingVertical: 3,
		borderRadius: 16,
	}
});

export default AluminiumStackScreen;
