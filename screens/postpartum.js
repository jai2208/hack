import React,{Component} from "react";
import {Text,TouchableOpacity,Image,View,StyleSheet,ScrollView} from "react-native"

export default function trimesters() {
    
    return(
     
        <View style={styles.container}>
            <View style={styles.textCon1}>
                <Text style={styles.text1}>
                Postpartum care, also known as postnatal care, is the medical and emotional support provided to a woman after childbirth. This period is crucial for the well-being of both the mother and the newborn, and it has several important aspects and benefits
                </Text>
            </View>
            <View style={styles.textCon1}>
                <Text style={styles.text2}>
                Maternal physical recovery: The postpartum period is a time when a woman's body undergoes significant changes as it heals from the demands of pregnancy and childbirth. Proper postpartum care allows healthcare providers to monitor and address any complications or issues that may arise, such as postpartum hemorrhage, infections, or incision healing (in the case of cesarean sections).
                </Text>
            </View>
            <View style={styles.textCon1}>
                <Text style={styles.text2}>
                Emotional well-being: The postpartum period can be emotionally challenging, with many women experiencing mood swings, anxiety, and depression. Postpartum care provides an opportunity to screen for and address postpartum depression and other mental health issues. Emotional support and counseling can be offered to help women navigate the transition to motherhood.
                </Text>
            </View>
            <View style={styles.textCon1}>
                <Text style={styles.text2}>
                In summary, postpartum care is vital for the physical, emotional, and mental well-being of both the mother and the newborn. It provides an opportunity to address any medical or psychological issues that may arise during this crucial period, ensuring that both mother and baby receive the necessary support and care.
                </Text>
            </View>
            
        </View>
    
    )
   
}

const styles = StyleSheet.create({

    container:{
        flex:2,
        backgroundColor:"#F4C2C2"
    },

    textCon1:{
        paddingTop:20
    },

   

    text1:{
        fontSize:16
    },

    text2:{
        fontSize:14
    },

      
})