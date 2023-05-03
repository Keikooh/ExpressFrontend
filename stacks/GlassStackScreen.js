import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GlassStockScreen from '../screens/GlassStockScreen';
import MaterialFormScreen from '../screens/MaterialFormScreen';

const Stack = createNativeStackNavigator();

const GlassStackScreen = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='GlassStock'
				component={GlassStockScreen}
				options={({ navigation }) => ({
					headerStyle: { backgroundColor: '#EBEFF8', height: 80 },
					headerTitle: '',
					headerRight: () => (
						<TouchableOpacity
							onPress={() => navigation.navigate('Agregar vidrio')}
						>
							<Text>Agregar</Text>
						</TouchableOpacity>
					),
				})}
			/>
			<Stack.Screen
				name='Agregar vidrio'
				component={MaterialFormScreen}
				initialParams={{ prevScreenName: 'GlassStock' }}
				options={{
					headerStyle: { backgroundColor: '#EBEFF8' },
				}}
			/>
		</Stack.Navigator>
	);
};

export default GlassStackScreen;
