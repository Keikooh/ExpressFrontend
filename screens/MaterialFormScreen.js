import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import {Picker} from '@react-native-picker/picker'

import Layout from '../components/Layout'

const MaterialFormScreen = () => {
  return (
    <Layout>
      <View style={{flexDirection:'row'}}>
      <TextInput
        style={styles.input}
        keyboardType='decimal-pad'
        placeholderTextColor='#6E7582'
        placeholder='Ancho'
      />
      <TextInput
        style={styles.input}
        keyboardType='decimal-pad'
        placeholder='Largo'
      />
      </View>
      <View style={{flexDirection:'row'}}>
      <TextInput
        style={styles.input}
        keyboardType='decimal-pad'
        placeholder='Grosor'
      />
      <Picker style={styles.input}>
        <Picker.Item label='Verde' value='verde'/>
        <Picker.Item label='Azul' value='azul'/>
        <Picker.Item label='Negro' value='negro'/>
      </Picker>
      </View>
      
      <View style={{flexDirection:'row'}}>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        placeholder='Existencias'
      />
      <TextInput
        style={styles.input}
        keyboardType='decimal-pad'
        placeholder='Precio c/u'
      />
      </View>
      
    </Layout>
  )
}

const styles = StyleSheet.create({
  input:{
    marginTop: 10,
    flex:1,
    fontSize: 17,
    padding:10,
    margin: 10,
    height: 35,
    borderBottomWidth: 1,
    borderColor: '#414D9C'

  }
})

export default MaterialFormScreen