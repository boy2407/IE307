import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import React, { useState } from 'react';

export default function KetQuaHocTap() {
  const [HK1, setHK1] = useState('');
  const [HK2, setHK2] = useState('');
  const [TB, setTB] = useState('');
  const [KQ, setKQ] = useState('');
  const [HL, setHL] = useState('');

  const xuly = () => {
    let hk1 = parseFloat(HK1);
    let hk2 = parseFloat(HK2);   

    if (isNaN(hk1) || isNaN(hk2) || hk1 < 0 || hk1 > 10 || hk2 < 0 || hk2 > 10) {
      
      Alert.alert('Thông báo',
      'Điểm chỉ từ 0 đến 10 cho HK1 và HK2',
      [{text:'Đã hiểu',onPress:()=>console.log('Fail')}]);
      setHK1('');
      setHK2('');
      return;
    }
    let tb = (hk1 + hk2 * 2) / 3;
    setTB(tb.toFixed(2));
    
    if (tb >= 5) {
      setKQ('Được lên lớp');
    } else {
      setKQ('Ở lại lớp');
    }

    if (tb >= 8) {
      setHL('Giỏi');
    } else if (tb > 6.5) {
      setHL('Khá');
    } else if (tb >= 5) {
      setHL('Trung bình');
    } else {
      setHL('Yếu');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Kết quả học tập</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Điểm HK1:</Text>
        <TextInput style={styles.input} value={HK1}
          onChangeText={setHK1} keyboardType='numeric' />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Điểm HK2:</Text>
        <TextInput style={styles.input} value={HK2}
          onChangeText={setHK2} keyboardType='numeric' />
      </View>

      <View style={styles.resultContainer}>
        <Text style={styles.label}>Điểm trung bình: </Text>
        <TextInput style={styles.result} value={TB} editable={false} />
      </View>

      <View style={styles.resultContainer}>
        <Text style={styles.label}>Kết quả: </Text>
        <TextInput style={styles.result} value={KQ} editable={false} />
      </View>

      <View style={styles.resultContainer}>
        <Text style={styles.label}>Xếp loại học lực: </Text>
        <TextInput style={styles.result}
          value={HL} editable={false} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title='Xử lý' onPress={() => xuly()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  resultContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
  },
  label: {
    fontSize: 18,
  },
  input: {
    fontSize: 18,
    height:40,
    borderColor:'gray',
    borderWidth:1,
    paddingLeft:10,
    flexBasis:'70%',
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
