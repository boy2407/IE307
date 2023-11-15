import React, { useState ,useEffect} from 'react';
import { StyleSheet,Button,View,Text, Alert,ImageBackground,TextInput,Switch,Image } from "react-native";
import * as SQLite from 'expo-sqlite'

var db = SQLite.openDatabase('qlbh.db')

export default function Register ({navigation}) {
    const [username,setUserName] = useState('')
    const [password,setPassWord] = useState('')
    const [email,setEmail] = useState('')
    const [sex,setSex] = useState('')
    const [confirmPass,setConfirmPassWord] = useState('')

    useEffect(()=>{
        creatTabelUser();
    },[])

    const creatTabelUser=()=>{
        db.transaction(function (txn){
            txn.executeSql(
                    'CREATE TABLE IF NOT EXISTS table_user (userid INTEGER PRIMARY KEY AUTOINCREMENT, username VARCHAR(20), password VARCHAR(20) , email_adderss VARCHAR (255), sex BIT)',
                    [],
                    console.log('success')

            )
                
        
        })
       
    }
     
    let register = () =>{
  
      if(!username){
        alert('Pleas fill name')
        return
      }
      if(!password){
        alert('Pleas fill PassWord')
        return
      }
      if(!confirmPass){
        alert('Pleas fill PassWord')
        return
      }
      if(password != confirmPass){
        alert('password incorrect​')
        return
      }
      
      db.transaction(function (tx) {
        console.log(username,email)
        tx.executeSql(
          'INSERT INTO table_user (username, password, email_adderss, sex) VALUES(?,?,?,?)',
          [username, password, email, sex],
          (tx, results) => {
            console.log('Results', results.rowsAffected);
            if (results.rowsAffected > 0) {
              Alert.alert(
                'Success',
                'You are Registered Successfully',
                [
                  {
                    text: 'Ok',
                    // onPress: () => navigation.navigate('Login'),
                  },
                ],
                { cancelable: false }
              );
            } else {           
              alert('Registration Failed');
            }
          }
        );

       
      });
      
    }


    return (
        <View style={styles.container}>
        <ImageBackground />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Register</Text>
        </View>
  
        <View style={styles.inputContainer}>
          <Text style={styles.label} >UserName</Text>
          <TextInput style={styles.input} value={username}
            onChangeText={setUserName} placeholder="Họ tên" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label} >Email</Text>
          <TextInput style={styles.input} value={email}
            onChangeText={setEmail} placeholder="Email" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label} >PassWord</Text>
          <TextInput style={styles.input}     
            secureTextEntry={true} value={password}
            multiline={false}
            onChangeText={setPassWord} placeholder="PassWord" />
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.label}>Confirm password</Text>
            <TextInput style={styles.input}     
                secureTextEntry={true} value={confirmPass}
                multiline={false}
                onChangeText={setConfirmPassWord} placeholder="Confirm password" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label} >Sex</Text>
          <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={sex ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={setSex}
          value={sex}
        />
        </View>
  
        <View style={styles.buttonContainer}>
           <Image style={styles.image}source ={sex==true?require('../../assets/images/man.png'):require('../../assets/images/woman.png')} />
        </View>   
   
        <View style={styles.buttonContainer}>
          <Button title='Create account'
            onPress={() => {
              register()
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
    fontSize: 16,
  },
  input: {
    height:40,
    borderColor:'gray',
    borderWidth:1,
    paddingLeft:10,
    flexBasis:'60%',
  },
  buttonContainer:{
    marginTop:20,
  }
});
