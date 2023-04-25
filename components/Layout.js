import { View, ScrollView, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'

//import Add from './icons/Logo'

const layout = ({children}) => {
  return (
      <View style={styles.container}>
        {children}
    </View>
  )
}



export default layout