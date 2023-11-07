import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Buoi5_v2 from './buoi5_v2';
import Login from '../screens/Login';
import { Entypo } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();
export default function TabSreen(){
    return(

        <Tab.Navigator>
            <Tab.Screen name='Home' component={Buoi5_v2}
               options={{
                headerShown: false,
                tabBarLabel:'Home',
                tabBarIcon:()=>(
                    <Entypo name="home" size={24} color="black" />               
                )
            }}/>

            <Tab.Screen name='Login' component={Login}         
            options={{
            headerShown: false,
            tabBarLabel:'Login',
            tabBarIcon:()=>(        
                <Entypo name="login" size={24} color="black" />   
            )
            }}
            /> 
           
        </Tab.Navigator>
    )
}