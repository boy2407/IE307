import React from 'react';
import { Button, View, StyleSheet,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const NavigationMenu = ({ navigation }) => {
  
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>

     
      <View style={styles.group}>
        <Text style={styles.title}>Buổi 1</Text>
        <View style={styles.button}>
          <Button title="Đăng nhập" onPress={() => navigateToScreen('Login')} />
        </View>
        <View style={styles.button}>
          <Button title="Tính điểm trung bình" onPress={() => navigateToScreen('TinhDiemTB')} />
        </View>
      </View>

    
      <View style={styles.group}>
        <Text style={styles.title}>Buổi 2</Text>
        <View style={styles.button}>
          <Button title="Đổi năm" onPress={() => navigateToScreen('DoiNam')} />
        </View>
        <View style={styles.button}>
          <Button title="Fat list" onPress={() => navigateToScreen('Fat_list')} />
        </View>
      </View>

      <View style={styles.group}>
          <Text style={styles.title}>Buổi 3</Text>
          <View style={styles.button}>
            <Button title="Selection_list" onPress={() => navigateToScreen('Selection_list')} />
          </View>    
          <View style={styles.button}>
            <Button title="Modal" onPress={() => navigateToScreen('Modal')} />
          </View>
      </View> 
      
      <View style={styles.group}>
          <Text style={styles.title}>Buổi 5</Text>
          <View style={styles.button}>
            <Button title="Buoi5" onPress={() => navigateToScreen('Buoi5')} />
          </View>    
        </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  title:{
    fontSize:24,
    color:'red'
  },
  button: {
    marginTop: 20,
    padding: 10,
    borderRadius: 10
  }
});

export default NavigationMenu;
