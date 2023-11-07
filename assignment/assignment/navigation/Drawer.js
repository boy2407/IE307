import { createDrawerNavigator } from "@react-navigation/drawer"
import TabSreen from "./TabNavigate"
import Detail from "../screens/Detail"
const Drawer = createDrawerNavigator()

export default function DrawerScreen() {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name='Home' component={TabSreen}/>
            <Drawer.Screen name='Detail' component={Detail}/> 
        </Drawer.Navigator>
    )
}