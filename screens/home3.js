import React from "react";
import {Text,TouchableOpacity,Image,View,StyleSheet,ScrollView} from "react-native"
import { useNavigation } from '@react-navigation/native';

export default function home2() {

    const navigation = useNavigation()

    goToInfo = () =>{ navigation.navigate('Weight') }
    goTovac = () =>{navigation.navigate('Parturition')}
    goTodiet = () =>{navigation.navigate('Post-Partum')}
    

    return(
        
        <View style={styles.container}>
           <View style={styles.textCon1}>
            <Text style={styles.text1}>Weight</Text>
            </View> 
            <View style={styles.textCon2}>
            <Text style={styles.text2}>Get to know about consequences related to weight during pregnancy.</Text>
            </View> 
            <View style={styles.buttonCon1}>
                <TouchableOpacity onPress={goToInfo} style={styles.button1}>
                    <Text style={styles.text3}>CLICK HERE</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.textCon1}>
            <Text style={styles.text3}>PRECAUTION TOWARDS PARTURITION</Text>
            </View> 
            <View style={styles.textCon2}>
            <Text style={styles.text4}>Get to know about the preacautions needed to be taken towards Parturition.</Text>
            </View>
            <View style={styles.buttonCon1}>
                <TouchableOpacity onPress={goTovac} style={styles.button1}>
                    <Text style={styles.text3}>CLICK HERE</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.textCon1}>
            <Text style={styles.text3}>POST PARTUM CARE</Text>
            </View> 
            <View style={styles.textCon2}>
            <Text style={styles.text4}>Click the button below to know more about the care neede to be taken towards Post Partum.</Text>
            </View>
            <View style={styles.buttonCon1}>
                <TouchableOpacity onPress={goTodiet} style={styles.button1}>
                    <Text style={styles.text3}>CLICK HERE</Text>
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
        fontWeight:'600',
        fontSize:14
    },

    buttonCon1:{
        alignItems:'center',
        paddingTop:30
    },

    button1:{
        alignItems: 'center',
        backgroundColor: '#87CEEB',
        borderRadius:80,
        padding:10
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