
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet,Image,ImageBackground, Text, TextInput, View, Button, Alert, Switch } from 'react-native';
import React, { useState } from 'react';
import * as SQLite from 'expo-sqlite'
var db = SQLite.openDatabase('qlbh.db')


export default function Login() {
  const [username,setUserName] = useState('')
  const [password,setPassWord] = useState('')
  const [user,getusser]=useState({'username':0,'password':"","email_adderss":"",})
  const login = ()=>{
    db.transaction((tx)=>{
      tx.executeSql(
        'SELECT * FROM table_user WHERE username = ? and password =?',
        [username,password],
        (tx,results)=>{
          if(results.rows.length>0){
            AsyncStorage.getItem('user',JSON.stringify(results.rows.item(0)));
            getusser(results.rows.item(0));
          }
          else alert('Welcome')
        }
      )

    })
   
  }
  const Getuser =()=>{
      AsyncStorage.getItem('user').then(
        (value)=>getusser(JSON.parse(value)),
      )
  }
  return (
    <View style={styles.container}>
      <ImageBackground />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Đăng nhập</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label} >Họ Tên</Text>
        <TextInput style={styles.input} value={username}
          onChangeText={setUserName} placeholder="Họ tên" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label} >Mật khẩu</Text>
        <TextInput style={styles.input}     
          secureTextEntry={true} value={password}
          multiline={false}
          onChangeText={setPassWord} placeholder="Mật khẩu" />
      </View>


      <View style={styles.buttonContainer}>
        <Button title='Đăng nhập'
          onPress={() => {
            login()
            }} />
      </View>


    </View>
  );
}
const styles = StyleSheet.create({
  image:{
    height:80,
    width:80,
    marginTop: 10,
    alignSelf:'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  titleContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  label: {
    fontSize: 18,
  },
  input: {
    height:40,
    borderColor:'gray',
    borderWidth:1,
    paddingLeft:10,
    flexBasis:'70%',
  },
  buttonContainer:{
    marginTop:20,
  }
});
