import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AluminiumStockScreen from '../screens/AluminiumStockScreen';
import MaterialFormScreen from '../screens/MaterialFormScreen';

const Stack = createNativeStackNavigator();

const AluminiumStackScreen = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='Aluminium stock'
				component={AluminiumStockScreen}
				options={({ navigation }) => ({
					headerStyle: { backgroundColor: '#EBEFF8' },
					headerTitle: '',
					headerRight: () => (
						<TouchableOpacity
						onPress={() => navigation.navigate('Agregar aluminio', { onSubmit: () => navigation.navigate('Aluminium stock') })}
						>
							<Text>Agregar</Text>
						</TouchableOpacity>
					),
				})}
			/>
			<Stack.Screen
				name='Agregar aluminio'
				component={MaterialFormScreen}
				initialParams={{ myProp: 'Agregar aluminio' }} 
				options={{
					headerStyle: { backgroundColor: '#EBEFF8' },
				}}
			/>
		</Stack.Navigator>
	);
};

export default AluminiumStackScreen;
