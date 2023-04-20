import { View, Text, FlatList, RefreshControl, Image} from 'react-native'
import React,{useState, useEffect} from 'react'

import Material_Item from './Material_Item'
import {getMaterial, deleteMaterial} from '../api.js'

const Material_List = ({type}) => {
 const [material, setmaterial] = useState([])
 const [refreshing, setrefreshing] = useState(false)
 const [emptyData, setemptyData] = useState(false)

  const loadMaterial = async () => {
    const data = await getMaterial()
    setmaterial(data)
    //setemptyData(data.length === 0 ? true : false)
    console.log(data.length)
  } 

  useEffect(() => {
    loadMaterial()
  }, [])

  const handleDelete = async (id) =>{
    await deleteMaterial(id)
    await loadMaterial()
  }
  

  const renderItem = ({ item }) => {
    if(item.type === type)
      return <Material_Item material={item} handleDelete={handleDelete}/>
}

const Materials = () =>{
  return (
    <FlatList
      style={{width:'100%'}}
      data={material}
      keyExtractor={(item) => item._id}
      renderItem={renderItem}
      refreshControl={
        <RefreshControl 
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
      />
  )
}

const Empty = () =>{
  return(
    <View style={{flex: 1, justifyContent:'center'}}>
      <Image
      source={require('../assets/images/empty.png')}
      style={{width:100, height:100, alignSelf:'center'}}
    />
    </View>
  )
}

  const onRefresh = React.useCallback(async() =>{
    setrefreshing(true)
    await loadMaterial()
    setrefreshing(false)
  })

  return (
   
      material.length > 0 ? Materials() : Empty()
    
  )
}



export default Material_List
