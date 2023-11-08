
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import DrawerScreen from './screens/buoi8/Drawer';
export default function App() {
  return (
    <NavigationContainer>
       <DrawerScreen/>
    </NavigationContainer>    
  );
}
