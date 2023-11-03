import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FlowerType from './flowerType_v2'
import FlowerList from './flowerList_v2'
import FlowerDetail from './flowerDetail_v2'

const Stack = createNativeStackNavigator()

export default function Buoi5_v2(){
    return (
        <NavigationContainer>
            {
                  <Stack.Navigator initialRouteName='FlowerType'>
                  <Stack.Screen name='FlowerType' component={FlowerType}/>
                  <Stack.Screen name='FlowerList' component={FlowerList}/>
                  <Stack.Screen name='FlowerDetail' component={FlowerDetail}/>
              </Stack.Navigator>
            }        
        </NavigationContainer>

    );
}