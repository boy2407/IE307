import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Buoi5_v2 from "./buoi5_v2";
import Buoi5 from "../screens/buoi5/buoi5";
import FatList from "../screens/buoi1_3/Fat_list";
import KetQuaHocTap from "../screens/buoi1_3/KetQuaHocTap";
import Modal_v1 from "../screens/buoi1_3/Modal";
import Section_List from "../screens/buoi1_3/Selection_list";
import DrawerScreen from "./Drawer";
import NavigationMenu from "../screens/NavigationMenu";
import DangNhap from "../screens/buoi1_3/DangNhap";
import DoiNam from "../screens/buoi1_3/DoiNam";
const Auth = createNativeStackNavigator();
export default function AuthStack(){

    return(
        <Auth.Navigator>
              <Auth.Screen 
                name="Home" 
                component={NavigationMenu} 
                options={{
                     title: 'Các bài tập' 
                     }}
            />  
            <Auth.Screen  
                name="KetQuaHocTap" 
                component={KetQuaHocTap} 
                options={{ title: 'Tính điểm trung bình'
                
                 }} 
            />
            <Auth.Screen 
                name="DangNhap" 
                component={DangNhap}
            />

            <Auth.Screen 
                name="DoiNam" 
                component={DoiNam} 
                options={{ title: 'Đổi năm Âm Lịch'
                 }}
             />

            <Auth.Screen 
                name="FatList" 
                component={FatList}
             />    

            <Auth.Screen 
                name="SectionList" 
                component={Section_List} 
           
                options={{ title: 'Hoa theo chủ đề' 
                }}
             />      

            <Auth.Screen 
                name="Modal" 
                component={Modal_v1} 
                options={{ title: 'Modal'     
            }} 
            />    

            <Auth.Screen 
                name="Buoi5" 
                component={Buoi5} 
                options={{ title: 'Buoi5'
             }} 
            />                  
 
            <Auth.Screen
                name="DrawerScreen"
                component={DrawerScreen}
                options={{
                    title: 'Drawer' ,
                    headerShown:false,                  
                }}
            />

        </Auth.Navigator>
    )
}