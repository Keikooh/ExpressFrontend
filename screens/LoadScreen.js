import { View, Text } from "react-native";
import React from "react";
import Logo from "../assets/svg/Logo";
import Layout from "../components/Layout";

const LoadScreen = ({ navigation }) => {
  setTimeout(() => {
    navigation.replace("Aplicacion");
  }, 3000);

  return (
    <Layout>
      <View style={{ alignSelf: "center", marginVertical: "70%" }}>
        <Logo />
      </View>
    </Layout>
  );
};

export default LoadScreen;
