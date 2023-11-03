
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TinhDiemTB from './screens/KetQuaHocTap';
import Login from './screens/DangNhap';
import Fat_list from './screens/Fat_list';
import DoiNam from './screens/DoiNam';
import Selection_list from './screens/Selection_list';
import Modal from './screens/Modal';
import NavigationMenu from './navigation/NavigationMenu';
import Buoi5 from './screens/buoi5';
import Buoi5_v2 from './navigation/buoi5_v2';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   {
    //     <Stack.Navigator  >
    //           <Stack.Screen name="Home" component={NavigationMenu} options={{ title: 'Các bài tập' }}/>
    //           <Stack.Screen  name="TinhDiemTB" component={TinhDiemTB} options={{ title: 'Tính điểm trung bình' }} />
    //           <Stack.Screen name="Login" component={Login} />
    //           <Stack.Screen name="DoiNam" component={DoiNam} options={{ title: 'Đổi năm Âm Lịch' }} />
    //           <Stack.Screen name="Fat_list" component={Fat_list} />    
    //           <Stack.Screen name="Selection_list" component={Selection_list} options={{ title: 'Hoa theo chủ đề' }} />              
    //           <Stack.Screen name="Modal" component={Modal} options={{ title: 'Modal' }} />    
    //           <Stack.Screen name="Buoi5" component={Buoi5} options={{ title: 'Buoi5' }} />                  
    //           <Stack.Screen name="Buoi5_v2" component={Buoi5_v2} options={{ title: 'Buoi5_v2' }} />                  
    //     </Stack.Navigator>
    //   }
    // </NavigationContainer>
    <Buoi5_v2/>
  );
}
