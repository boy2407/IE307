import React from 'react';
import { Button, View, StyleSheet,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScrollView } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const NavigationMenu = ({ navigation }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <GestureHandlerRootView >
      <ScrollView     
      >
        <View style={styles.container}>
        <View style={styles.group}>
          <Text style={styles.title}>Buổi 1</Text>
          <View style={styles.button}>
            <Button title="Đăng nhập" onPress={() => navigateToScreen('Login')} />
          </View>

          <View style={styles.button}>
            <Button title="Tính điểm trung bình" onPress={() => navigateToScreen('KetQuaHocTap')} />
          </View>
        </View>

        <View style={styles.group}>
          <Text style={styles.title}>Buổi 2</Text>
          <View style={styles.button}>
            <Button title="Đổi năm" onPress={() => navigateToScreen('DoiNam')} />
          </View>
          <View style={styles.button}>
            <Button title="Fat list" onPress={() => navigateToScreen('Fat_List')} />
          </View>
        </View>

        <View style={styles.group}>
            <Text style={styles.title}>Buổi 3</Text>
            <View style={styles.button}>
              <Button title="Selection_list" onPress={() => navigateToScreen('Selection_List')} />
            </View>    
            <View style={styles.button}>
              <Button title="Modal" onPress={() => navigateToScreen('Modal_v1')} />
            </View>
        </View> 

        <View style={styles.group}>
            <Text style={styles.title}>Buổi 5</Text>
            <View style={styles.button}>
              <Button title="Buoi5" onPress={() => navigateToScreen('Buoi5')} />
            </View>    
          </View>

          <View style={styles.group}>
            <Text style={styles.title}>Buổi 5 V2</Text>
            <View style={styles.button}>
              <Button title="Buoi5_v2" onPress={() => navigateToScreen('Buoi5_v2')} />
            </View>    
          </View>


          <View style={styles.group}>
            <Text style={styles.title}>Drawer Navigtaion</Text>
            <View style={styles.button}>
              <Button title="DrawerScreen" onPress={() => navigateToScreen('DrawerScreen')} />
            </View>    
          </View>

        </View>
      </ScrollView>
    </GestureHandlerRootView >
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
