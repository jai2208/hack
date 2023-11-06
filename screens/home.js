import React,{Component} from "react";
import {Text,TouchableOpacity,Image,View,StyleSheet,Linking} from "react-native"
import { useNavigation } from '@react-navigation/native';




export default function home() {

    const navigation = useNavigation();

    const gotToHome2 = () => {
        navigation.navigate('Care During Pregnancy')

   }

   const MY_URL = 'https://pmsma.mohfw.gov.in/pmsma-nearest-health-facility/'
   const MY_URL2 = 'https://aarogyasri.telangana.gov.in'
   

    return(
        <View style={styles.container}>
            <View style={styles.textContainer1}>
                <Text style={styles.text1}>Find The Nearest Health Facility/Hospital</Text>
            </View>
            <View style={styles.buttonContainer1}>
            <TouchableOpacity onPress={() => Linking.openURL(MY_URL)} style={styles.button1}>
                <Text style={styles.text2}>FIND NOW</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.textContainer2}>
                <Text style={styles.text3}>Arogyasri Health Care Trust</Text>
            </View>
            <View style={styles.textContainer3}>
                <Text style={styles.text4}>Arogyasri Health Care Trust is a program started by the government of Telangana
                to support equity of access to health care with a special care towards the poor. It provides high
                quality medical service. Some of the services it provides are Free food and Transportation, Free followup
                services and Cashless Treatments. More than 80 Lakh families have been helped with this trust. To know more
                about the trust and its schemes you can follow up to its website by clicking the button below. </Text>
            </View>
            <View style={styles.buttonContainer2}>
                <TouchableOpacity onPress={() => Linking.openURL(MY_URL2)} style={styles.button2}><Text style={styles.text5}>CLICK HERE</Text></TouchableOpacity>
            </View>
            <View style={styles.buttonContainer3}>
                <TouchableOpacity onPress={gotToHome2} style={styles.button3}>
                    <Text style={styles.text6}>GO TO HOME-2</Text>
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

    textContainer1:{
        alignItems:'center'
    },
    
    text1:{
        fontWeight:'500',
        fontSize:16,
        paddingTop:50
    },

    buttonContainer1:{
        paddingTop:30
    },

    button1:{
        alignItems: 'center',
        backgroundColor: '#87CEEB',
        borderRadius:80,
        padding:10
    },

    text2:{
        fontWeight:'bold',
        fontSize:22
    },

    textContainer2:{
        alignItems:'center',
        paddingTop:30
    },

    text3:{
        fontWeight:'bold',
        fontSize:20
    },

    textContainer3:{
        alignItems:'center',
        paddingTop:30
    },

    text4:{
        fontWeight:'500',
        fontSize:15,

    },

    buttonContainer2:{
        paddingTop:30
    },

    button2:{
        alignItems: 'center',
        backgroundColor: '#87CEEB',
        borderRadius:80,
        padding:10
    },

    text5:{
        fontWeight:'bold',
        fontSize:21
    },

    buttonContainer3:{
        paddingTop:50
    },

    button3:{
        alignItems: 'center',
        backgroundColor: '#87CEEB',
        borderRadius:80,
        padding:10
    },

    text6:{
        fontWeight:'bold',
        fontSize:15,
        color:'red'    
    },



})