import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Image,ImageBackground, Text, TextInput, View, Button, Alert, Switch } from 'react-native';
import React, { useState } from 'react';


export default function App() {
  const [username, setUserName] = useState('');
  const [pass, setPass] = useState('');
  const [Sex, setSex] = useState();


  const xuly = () => {
    Alert.alert('Thông báo',
    'Xin chào ' + username + '\nMật khẩu ' + pass+ '\nGiới Tính:'+ (Sex ? 'Nam':'Nữ'));
  };

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
          secureTextEntry={true} value={pass}
          multiline={false}
          onChangeText={setPass} placeholder="Mật khẩu" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label} >Giới tính</Text>
        <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={Sex ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={setSex}
        value={Sex}
      />
      </View>


      <View style={styles.buttonContainer}>
        <Button title='Đăng nhập'
          onPress={() => xuly()} />
      </View>

      <View style={styles.buttonContainer}>
      <Text style={styles.label} >{username!=''?"Chào bạn: "+username:""}</Text>
         <Image style={styles.image}source ={Sex==true?require('../assets/images/man.png'):require('../assets/images/woman.png')} />
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
