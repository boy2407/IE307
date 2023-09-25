import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Image,ImageBackground, Text, TextInput, View, Button, Alert, Switch } from 'react-native';
import React, { useState } from 'react';


export default function App() {
  const [Namdl, setNamdl] = useState('');
  const [Namal, setNamal] = useState('');
  const [hinh, sethinh] = useState();
  var can = ["Canh","Tân","Nhâm","Quý","Giáp","Ất","Bình","Đinh","Mậu","Kỹ"]
  var chi = ["Thân","Dậu","Tuất","Hợi","Tý","Sữu","Dần","Mẹo","Thìn","Tỵ","Ngọ","Mùi"]
  var lshinh = [require('../assets/images/than.jpg'),
  require('../assets/images/dau.jpg'),
  require('../assets/images/tuat.jpg'),
  require('../assets/images/hoi.jpg'),
  require('../assets/images/ty.jpg'),
  require('../assets/images/suu.jpg'),
  require('../assets/images/dan.jpg'),
  require('../assets/images/meo.jpg'),
  require('../assets/images/thin.jpg'),
  require('../assets/images/ty.jpg'),
  require('../assets/images/ngo.jpg'),
]
  const Doinam=()=>{
    let namdl = parseInt(Namdl)
    if(isNaN(namdl))
    {
      Alert.alert('Thông báo',
      'vui lòng nhận năm dương lịch')
      return;
    }
    
    var kq = can[Namdl%10]+' '+chi[Namdl%12]
    setNamal(kq)
    sethinh(lshinh[Namdl%12])
  }
  return (
    <View style={styles.container}>

      <View style={styles.titleContainer}>
         <Text style={styles.title}>Đổi Năm</Text>
      </View>

      <View style={styles.inputContainer}>
          <Text style={styles.label} >Năm dương lịch</Text>
          <TextInput style={styles.input} 
          value={Namdl} onChangeText={setNamdl}  />
      </View>

      <View style={styles.inputContainer}>
          <Text style={styles.label} >Năm âm lịch</Text>
          <TextInput style={styles.result}     
             value={Namal} onChangeText={setNamal} editable={false} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title='Đổi năm'
          onPress={() => Doinam()} />
      </View>

      <View style={styles.buttonContainer}>
         <Image style={styles.image} source ={hinh} />
      </View>   
      
    </View>
  );
}

const styles = StyleSheet.create({
  image:{
    height:200,
    width:240,
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
    flexBasis:'60%',
  },
  result:{
    fontSize: 18,
    color:'blue',
    flexBasis:'50%',
   },
  buttonContainer:{
    marginTop:20,
  }
});
