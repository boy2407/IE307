
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableOpacity, Image, Modal, Pressable } from 'react-native';




export default function FlowerDetail(props) {

  return (
    <View style={styles.container}>
  
      {/* chi tiet */}
      <Modal
        animationType='slide'
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => { !props.modalVisible }}>
            
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text styles={styles.modalText}>{props.flowerDetail.tenhoa}</Text>
            <Image style={styles.image} source={props.flowerDetail.hinh}></Image>
            <Text styles={styles.modalText}>Giá bán:{props.flowerDetail.dongia}</Text>
            <Text>{props.flowerDetail.mota}</Text>

            <Pressable style={[styles.button,styles.buttonClose]}
              onPress={()=>props.setModalVisible(!props.modalVisible)}>
              <Text style={styles.textStyle}>Đóng</Text>
            </Pressable> 
          </View>
        </View>

      </Modal>
    </View>

  )
}

const styles = StyleSheet.create({
    image: {
      height: 160,
      width: 160,
      marginTop: 10,
      alignSelf: 'center',
      borderRadius: 20,
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
  
  