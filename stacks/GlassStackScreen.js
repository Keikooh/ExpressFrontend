import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import GlassStockScreen from '../screens/GlassStockScreen'
import MaterialFormScreen from '../screens/MaterialFormScreen'

const Stack = createNativeStackNavigator()


const GlassStackScreen = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="GlassStock" component={GlassStockScreen}
            options={({navigation})=> ({
              headerTitleContainerStyle: { height: 0 },
              
              
              headerTitle:'',
              headerRight: () => (
                <TouchableOpacity onPress={()=> navigation.navigate('AddMaterial')}>
                  <Text>Agregar</Text>
                </TouchableOpacity>
              )
            })}/>
        <Stack.Screen name="AddMaterial" component={MaterialFormScreen}/>
    </Stack.Navigator>
  )
}

export default GlassStackScreen