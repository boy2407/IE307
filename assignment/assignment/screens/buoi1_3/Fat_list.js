import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Image,ImageBackground, Text, TextInput, View, Button, Alert, Switch, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';


export default function FatList() {
  const data =[
  {
    "id":1,
    "name":"Hoa Quà tặng",
    "image":require('../../assets/images/cuc_1.jpg')
  },
  {
    "id":2,
    "name":"Hoa cưới",
    "image":require('../../assets/images/cuc_10.jpg')

  },
  {
    "id":3,
    "name":"Hoa hồng",
    "image":require('../../assets/images/cuc_3.jpg')

  },
  {
    "id":4,
    "name":"Hoa hồng",
    "image":require('../../assets/images/cuc_4.jpg')

  },
  {
    "id":5,
    "name":"Hoa hồng",
    "image":require('../../assets/images/cuc_5.jpg')

  },
  {
    "id":6,
    "name":"Hoa hồng",
    "image":require('../../assets/images/cuc_6.jpg')

  },
  {
    "id":7,
    "name":"Hoa hồng",
    "image":require('../../assets/images/cuc_7.jpg')

  },
  {
    "id":8,
    "name":"Hoa Lài",
    "image":require('../../assets/images/cuc_8.jpg')

  },
  {
    "id":9,
    "name":"Hoa Thu",
    "image":require('../../assets/images/cuc_9.jpg')

  },
];

  return (
   <View style={styles.container}>
      <FlatList
       data={data}
       showsVerticalScrollIndicator={false}
       renderItem={({item})=>(
          <View>
              <Text style={styles.text}>{item.name}</Text>
              <TouchableOpacity activeOpacity={0.5} onPress={()=> Alert.alert(item.name)}>
                <Image source={item.image} style={styles.image} />
              </TouchableOpacity>
          </View>
       )}
      />
   </View>
  );
}
const styles = StyleSheet.create({
  image:{
    height:120,
    width:120,
    resizeMode:'stretch',
    alignSelf:'center',
    borderRadius: 15, 
    borderWidth: 1, 
    borderColor: '#ddd', 
},
text:{
  textAlign:'center',
  color:'#800000',
  fontSize:20,
  
},
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent:'center'
  }
});
