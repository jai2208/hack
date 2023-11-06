import React, { Component } from "react";
import {Text,TouchableOpacity,Image,View,StyleSheet} from "react-native"
import { useNavigation } from '@react-navigation/native';



export default function intro() {
    
        const navigation = useNavigation();

        const gotToHome = () => {
            navigation.navigate('Home')
        }

        return(
            <View style={styles.container}>
               <View style={styles.image}>
                    <Image source={require("../assets/logo.png")} style={styles.img}></Image>
                </View>
                <View style={styles.Title}>
                    <Text style={styles.text1}>Mom-N-Baby Care</Text>
                </View>
                <View style={styles.Title}>
                    <Text style={styles.text2}>Welcome to MOM-N-BABY Care. Hope you have a very good user interface and get the right 
                    information you need about your pregnancy. Our app wants every mom to have a safe delivery and live a happy
                    life with their child. Thank You for opting our app.</Text>
                </View>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity onPress={gotToHome} style={styles.button}>
                    <Text style={styles.text3}>CLICK HERE TO NAVIGATE TO HOME PAGE</Text>
                  </TouchableOpacity>
                </View>
                
            </View>
        )
    }


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#F4C2C2"
  },

  Title:{
    alignItems:"center"
  },

  text1:{
    fontWeight:'bold',
    fontSize:34,
    paddingTop:10,
    color:"#00FFEF"
  },

  text2:{
    fontWeight:'bold',
    fontSize:15,
    paddingTop:50,
    color:"purple"
  },

  text3:{
    fontSize:14,
    fontWeight:"400",
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#87CEEB',
    borderRadius:80,
    padding:10
  },

  buttonContainer:{
    paddingTop:40
  },

  image:{
    alignItems:"center",
    paddingTop:20,
    
  },

  img:{
    width:150,
    height:150          
  },


})