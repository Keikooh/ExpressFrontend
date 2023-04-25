import { View, Text, FlatList } from 'react-native'
import React, {useEffect, useState} from 'react'


import Material_List from '../components/Material_List'
import Layout from '../components/Layout'

const GlassStockScreen = () => {
  return (
    <Layout>
      <Material_List type={'Vidrio'}/>
    </Layout>
  )
}

export default GlassStockScreen