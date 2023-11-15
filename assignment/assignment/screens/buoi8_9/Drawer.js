import { createDrawerNavigator } from "@react-navigation/drawer"
import TabSreen from "./TabNavigate"
import Detail from "./Detail"
import Register from './Register';
import Login from "./Login";
import ListUser from "./ListUser";
const Drawer = createDrawerNavigator()

export default function DrawerScreen() {
    return(
        <Drawer.Navigator>
            {/* <Drawer.Screen name='Home' component={TabSreen}/> */}

            <Drawer.Screen name='Detail' component={Detail}/> 
            <Drawer.Screen name='Register' component={Register}/> 
            <Drawer.Screen name='Login' component={Login}/>
            <Drawer.Screen name='ListUser' component={ListUser}/>


        </Drawer.Navigator>
    )
}