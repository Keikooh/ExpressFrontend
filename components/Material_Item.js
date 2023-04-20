import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

// Importing svg components
import Stock from '../assets/svg/Stock'
import PriceTag from '../assets/svg/PriceTag'

// Importing styles
import {ItemStyle} from '../assets/styles/ItemStyle'

const Material_Item = ({ material, handleDelete}) => {
  return (
    <View style={ItemStyle.itemContainer}>
      <View>
        <Text style={ItemStyle.title}>{`${material.type
          .slice(0, 4)
          .toUpperCase()}${material.color.slice(0, 4).toUpperCase()}`}</Text>
        <Text
          style={[
            ItemStyle.materialType,
            {
              backgroundColor:
                material.type === "Aluminio" ? "#212F5B" : "#78CBE8",
            },
          ]}
        >
          {material.type.toUpperCase()}
        </Text>
          <View style={{flexDirection:'row', margin:5, alignItems:'center'}}>
          <Stock fill='#212F5B' width={12} height={12} style={{marginRight:5}}/>
          <Text>{material.cost}</Text>
        
          </View>
          <View style={{flexDirection:'row',  margin:5, marginTop:-5, alignItems:'center'}}>
          <Text>{material.amount}</Text>
          </View>
      </View>

      <View style={{flexDirection:'row-reverse',  alignItems:'center'}}>
        
      <TouchableOpacity
          onPress={()=> handleDelete(material._id)}
          style={[ItemStyle.button, { backgroundColor: "#ED6262" }]}
        >
          <Text style={ItemStyle.buttonText}>eliminar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[ItemStyle.button, { backgroundColor: "#414D9C" }]}
        >
          <Text style={ItemStyle.buttonText}>editar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Material_Item;
