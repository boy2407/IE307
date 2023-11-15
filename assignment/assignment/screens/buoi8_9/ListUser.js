import React, { useState ,useEffect} from 'react';
import { StyleSheet,Button,View,Text, Alert,ImageBackground,TextInput,Switch,Image, SafeAreaView } from "react-native";
import * as SQLite from 'expo-sqlite'
import { FlatList } from 'react-native-gesture-handler';
var db = SQLite.openDatabase('qlbh.db')
SQLite.openDatabase
export default function ListUser ({navigation}){

    let[users,setUsers] = useState([])

    const getListUser = () =>{
        db.transaction((tx)=>{
            tx.executeSql('SELECT * FROM table_user',
            
            [],
            (tx,results) =>{

                var temp = []
                for(let i = 0 ;i<results.rows.length;++i)
                    temp.push(results.rows.item(i));
                setUsers(temp);
            }
            )
        })
        console.log('Get a list of successes')
    }

    useEffect(()=>{
        const unsubscrice = navigation.addListener('focus', ()=>{
            getListUser();
        })
    })
    let listUserViewSeparator =()=>{
        return(
            <View style={{height:0.2,width:'100%',backgroundColor:'#808080'}} >

            </View>
        )
    }
    let listUserView = (item) => {
        return(
            <View 
                key={item.user_id}
                style = {{ backgroundColor:'White', paddingStart:20}} >
                <Text>Id:{item.userid}</Text>
                <Text>Name:{item.username}</Text>
                <Text>PassWord:{item.password}</Text>
                <Text>Email:{item.email_adderss}</Text>
                <Text>Sex:{item.sex==true?'male':'female'}</Text>
                <View style={styles.buttonContainer}>
                     {/* <Image style={styles.image}source ={item.sex==true?require('../../assets/images/man.png'):require('../../assets/images/woman.png')} /> */}
                </View>   
            </View>
        )
    }

    return(
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1,backgroundColor:'white'}}>
                <View style={{flex:1}}>
                    <FlatList 
                        data = {users}
                        ItemSeparatorComponent={listUserViewSeparator}
                        keyExtractor={(item,index)=>index.toString()}
                        renderItem={({item})=> listUserView(item)}     
                        >  
                    </FlatList>
                </View>
            </View>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    image:{
      height:80,
      width:80,
      marginTop: 10,
      alignSelf:'center'
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
    },
    titleContainer: {
      alignItems: 'center',
      marginVertical: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    inputContainer: {
      marginTop: 10,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row'
    },
    label: {
      fontSize: 18,
    },
    input: {
      height:40,
      borderColor:'gray',
      borderWidth:1,
      paddingLeft:10,
      flexBasis:'70%',
    },
    buttonContainer:{
      marginTop:20,
    }
  });
