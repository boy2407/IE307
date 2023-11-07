 {/* {
        <Stack.Navigator  >
              <Stack.Screen name="Home" component={NavigationMenu} options={{ title: 'Các bài tập' }}/>
              <Stack.Screen  name="TinhDiemTB" component={TinhDiemTB} options={{ title: 'Tính điểm trung bình' }} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="DoiNam" component={DoiNam} options={{ title: 'Đổi năm Âm Lịch' }} />
              <Stack.Screen name="Fat_list" component={Fat_list} />    
              <Stack.Screen name="Selection_list" component={Selection_list} options={{ title: 'Hoa theo chủ đề' }} />              
              <Stack.Screen name="Modal" component={Modal} options={{ title: 'Modal' }} />    
              <Stack.Screen name="Buoi5" component={Buoi5} options={{ title: 'Buoi5' }} />                  
              <Stack.Screen name="Buoi5_v2" component={Buoi5_v2} options={{ title: 'Buoi5_v2' }} />                  
        </Stack.Navigator>
      }
       */}
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import AuthStack from './navigation/AuthStack';
import DrawerScreen from './navigation/Drawer';
export default function App() {
  return (
    <NavigationContainer>
       <AuthStack/>
    </NavigationContainer>    
  );
}
