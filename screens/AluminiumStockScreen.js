import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";

import { getAluminium } from "../api";
import Material_List from "../components/Material_List";
import Layout from "../components/Layout";

const AluminiumStockScreen = () => {
  const [aluminiums, setaluminiums] = useState([]);

  const loadAluminium = async () => {
    const data = await getAluminium();
    setaluminiums(data);
  };

  useEffect(() => {
    loadAluminium();
  }, []);

  return (
    <Layout>
      <Material_List materials={aluminiums} type={"Aluminio"} />
    </Layout>
  );
};

export default AluminiumStockScreen;
