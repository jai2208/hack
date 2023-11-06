import React from "react";
import {Text,TouchableOpacity,Image,View,StyleSheet,ScrollView} from "react-native"
import { useNavigation } from '@react-navigation/native';

export default function home2() {

    const navigation = useNavigation()

    goToInfo = () =>{ navigation.navigate('The Three Trimesters') }
    goTovac = () =>{navigation.navigate('Importance Of Vaccination')}
    goTodiet = () =>{navigation.navigate('Proper Nutrition N Diet')}
    gotTonew = () =>{navigation.navigate('Consequences')}

    return(
        
        <View style={styles.container}>
           <View style={styles.textCon1}>
            <Text style={styles.text1}>THE THREE TRIMESTERS</Text>
            </View> 
            <View style={styles.textCon2}>
            <Text style={styles.text2}>Click the button below to know about the trimesters.</Text>
            </View> 
            <View style={styles.buttonCon1}>
                <TouchableOpacity onPress={goToInfo} style={styles.button1}>
                    <Text style={styles.text3}>CLICK HERE</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.textCon1}>
            <Text style={styles.text3}>IMPORTANCE OF VACCINATION</Text>
            </View> 
            <View style={styles.textCon2}>
            <Text style={styles.text4}>Get to know more about the vaccination during pregnancy by clicking the button below.</Text>
            </View>
            <View style={styles.buttonCon1}>
                <TouchableOpacity onPress={goTovac} style={styles.button1}>
                    <Text style={styles.text3}>CLICK HERE</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.textCon1}>
            <Text style={styles.text3}>PROPER NUTRITION AND DIET</Text>
            </View> 
            <View style={styles.textCon2}>
            <Text style={styles.text4}>Click the button below to know more about proper intake of food in right amount during pregnancy.</Text>
            </View>
            <View style={styles.buttonCon1}>
                <TouchableOpacity onPress={goTodiet} style={styles.button1}>
                    <Text style={styles.text3}>CLICK HERE</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonCon1}>
                <TouchableOpacity onPress={gotTonew} style={styles.button1}>
                    <Text style={styles.text3}>GO TO HOME-3</Text>
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

    textCon1:{
        alignItems:'center',
        paddingTop:50
    },

    text1:{
        fontWeight:'bold',
        fontSize:25
    },
    textCon2:{
        alignItems:'center',
        paddingTop:10 
    },

    text2:{
        fontWeight:'500',
        fontSize:13
    },

    buttonCon1:{
        alignItems:'center',
        paddingTop:40
    },

    button1:{
        alignItems: 'center',
        backgroundColor: '#87CEEB',
        borderRadius:80,
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:10,
        paddingTop:20
    },

    text3:{
        fontWeight:'bold',
        fontSize:21
    },

    text4:{
        fontWeight:'500',
        fontSize:14 
    },

    
})