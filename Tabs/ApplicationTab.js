import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import HomeScreen from "../screens/HomeScreen";
import AluminiumStackScreen from "../stacks/AluminiumStackScreen";
import GlassStackScreen from "../stacks/GlassStackScreen";

const Tab = createMaterialTopTabNavigator();

const ApplicationTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 16, fontWeight: "bold" },
        tabBarStyle: { marginTop: 60, shadowColor: "white" },
      }}
    >
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Cristal" component={GlassStackScreen} />
      <Tab.Screen name="Aluminio" component={AluminiumStackScreen} />
    </Tab.Navigator>
  );
};

export default ApplicationTab;
