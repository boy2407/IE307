
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableOpacity, Image, Modal, Pressable } from 'react-native';

export default function App(props) {
  const DATA = [
    {
      "maloai": "1",
      "tenloai": "Hoa Quà tặng",
      "hinh": require('../assets/images/cuc_1.jpg')
    },
    {
      "maloai": "2",
      "tenloai": 'Hoa Cưới',
      "hinh": require('../assets/images/cuoi_1.jpg')
    },
    {
      "maloai": "3",
      "tenloai": 'Hoa Hồng',
      "hinh": require('../assets/images/hong_1.jpg')
    },
    {
      "maloai": "4",
      "tenloai": 'Hoa Tình Yêu',
      "hinh": require('../assets/images/xuan_1.jpg')
    }
  ];

  return (
    <View style={styles.container}>
      {/* flower type */}

      <View style={styles.containerFlowerType}>
        <Text style={styles.title}>Loại</Text>
        <FlatList data={DATA}
          renderItem={({ item }) =>
            <View style={styles.itemType}>
              <TouchableOpacity
                onPress={() => {
                  props.setTypeFlower(item)
                }}>
                <Text style={styles.label}>{item.tenloai}</Text>
              </TouchableOpacity>
            </View>
          }
        />
      </View>
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
  },
  image: {
    height: 160,
    width: 160,
    marginTop: 10,
    alignSelf: 'center',
    borderRadius: 20,
},
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
  },
  label: {
    fontSize: 16,
    alignSelf:'center'
  },
  itemType: {
    backgroundColor: '#2196F3',
    margin:20,
    alignItems: "center",
    borderRadius:5,
    width:120,
  },
  item: {  
      backgroundColor:'#fff',
      padding:20,
      marginVertical:8,
      marginHorizontal:16,
      borderRadius:10,
      shadowColor: '#000',
      shadowRadius:3.84,
      shadowOpacity: 0.25,
      elevation:9,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width:'90%',
    height:'50%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    marginTop:20,
    width:80,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})

