
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TinhDiemTB from './components/KetQuaHocTap';
import Login from './components/DangNhap';
import Fat_list from './components/Fat_list';
import DoiNam from './components/DoiNam';
import Selection_list from './components/Selection_list';
import NavigationMenu from './components/NavigationMenu';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      {
        <Stack.Navigator  >

              <Stack.Screen name="Home" component={NavigationMenu} options={{ title: 'Các bài tập' }}/>
              <Stack.Screen  name="TinhDiemTB" component={TinhDiemTB} options={{ title: 'Tính điểm trung bình' }} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="DoiNam" component={DoiNam} options={{ title: 'Đổi năm Âm Lịch' }} />
              <Stack.Screen name="Fat_list" component={Fat_list} />    
              <Stack.Screen name="Selection_list" component={Selection_list} options={{ title: 'Hoa theo chủ đề' }} />              

        </Stack.Navigator>
      }
    </NavigationContainer>
  );
}


export default App;