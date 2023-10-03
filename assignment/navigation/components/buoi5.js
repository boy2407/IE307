
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableOpacity, Image, Modal, Pressable } from 'react-native';
import FlowerDetail from './flowerDetail'
import FlowerList from './flowerList'
import FlowerType from './flowerType'

export default function App() {

  const [TypeFlower, setTypeFlower] = React.useState(
    {
      "maloai": "1",
      "tenloai": "Hoa Quà tặng",
      "hinh": require('../assets/images/cuc_1.jpg')
    }
  );
 const [flowerDetail,setFlowerDetail] = React.useState({
  "mahoa": 1,
  "tenloai": "Hoa Quà tặng",
  "tenhoa": "Đón xuân",
  "dongia": 15000,
  "hinh": require('../assets/images/cuc_9.jpg'),
  "mota": "Hoa hồng màu hồng đậm, hoa hồng xanh, các loại lá măng"
 })
  const [flower, setFlower] = React.useState({
    "mahoa": 1,
    "tenloai": "Hoa Quà tặng",
    "tenhoa": "Đón xuân",
    "dongia": 15000,
    "hinh": require('../assets/images/cuc_9.jpg'),
    "mota": "Hoa hồng màu hồng đậm, hoa hồng xanh, các loại lá măng"
  });
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
     
      <View style={styles.containerFlowerType}>
      <FlowerType 
      setTypeFlower = {setTypeFlower}
      />
      </View>
      <View style={styles.containerFlowerList}>
      <FlowerList 
      TypeFlower = {TypeFlower}
      setModalVisible={setModalVisible}
      setFlowerDetail={setFlowerDetail}
      />
      </View>

     <FlowerDetail 
      flowerDetail={flowerDetail}
      setModalVisible={setModalVisible}
      modalVisible={modalVisible}
      />  

    </View>

  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: "row",
  },
  containerFlowerType: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  containerFlowerList: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
})

