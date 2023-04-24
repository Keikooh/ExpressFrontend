import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoadScreen from "./screens/LoadScreen";
import ApplicationTab from "./Tabs/ApplicationTab";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cargando">
        <Stack.Screen
          name="Cargando"
          component={LoadScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Aplicacion"
          component={ApplicationTab}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
