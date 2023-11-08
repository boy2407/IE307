import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import FlowerType_v2 from './FlowerType_v2'
import FlowerList_v2 from './FlowerList_v2'
import FlowerDetail_v2 from './FlowerDetail_v2'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export default function Buoi5_v2(){
    return (
         
            <Stack.Navigator initialRouteName='FlowerType'>
                  <Stack.Screen name='FlowerType' component={FlowerType_v2}
                    options={{
                       
                        title:'Loại Hoa', 
                        headerStyle:{
                            backgroundColor:'#3b6e3b',
                        },
                        headerTitleStyle:{
                            fontWeight:'bold',
                            color:'white',
                        }                
                    }}
                  />
                  <Stack.Screen name='FlowerList' component={FlowerList_v2}
                   options={{
                       
                    title:'Danh Sách Hoa', 
                    headerStyle:{
                        backgroundColor:'#3b6e3b',
                    },
                    headerTitleStyle:{
                        fontWeight:'bold',
                        color:'white',
                    }                
                }}/>
                  <Stack.Screen name='FlowerDetail' component={FlowerDetail_v2}
                   options={{
                       
                    title:'Hoa', 
                    headerStyle:{
                        backgroundColor:'#3b6e3b',
                    },
                    headerTitleStyle:{
                        fontWeight:'bold',
                        color:'white',
                    }                
                }}/>
            </Stack.Navigator>
            
                
    );
}