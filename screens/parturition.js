import React,{Component} from "react";
import {Text,TouchableOpacity,Image,View,StyleSheet,ScrollView} from "react-native"

export default function Parturition() {
    
    return(
    <ScrollView>  
        <View style={styles.container}>
            <View style={styles.textCon1}>
                <Text style={styles.text1}>
                Preparing for childbirth and taking care of yourself when you're alone at home during the early stages of labor (parturition) can be a crucial part of the birth process. Here are some important steps to consider
                </Text>
            </View>
            <View style={styles.textCon1}>
                <Text style={styles.text2}>
                Communication: Stay in touch with your healthcare provider. They will have provided you with guidelines on when to contact them or head to the hospital. Make sure you have their contact information readily available.
                </Text>
            </View>
            <View style={styles.textCon1}>
                <Text style={styles.text2}>
                Support person: If possible, have a support person with you. This could be a partner, family member, or a doula. They can provide emotional support and help with practical matters.
                </Text>
            </View>
            <View style={styles.textCon1}>
                <Text style={styles.text2}>
                Comfort: Create a comfortable environment. Make sure your home is clean, and have everything you may need within easy reach, such as pillows, blankets, and any comfort items. You might also consider dimming the lights and playing soothing music.
                </Text>
            </View>
            <View style={styles.textCon1}>
                <Text style={styles.text2}>
                Hydration and nutrition: Stay hydrated and eat small, easy-to-digest snacks if you're hungry. You'll need energy for the labor process.
                </Text>
            </View>
            <View style={styles.textCon1}>
                <Text style={styles.text2}>
                Breathing and relaxation techniques: Practice deep breathing and relaxation techniques you may have learned in childbirth classes. These can help manage pain and stress.
                </Text>
            </View>
            <View style={styles.textCon1}>
                <Text style={styles.text2}>
                Timing contractions: Use a timer or smartphone app to time your contractions. Your healthcare provider likely gave you guidelines on when to contact them or go to the hospital based on the frequency, duration, and intensity of contractions.
                </Text>
            </View>
            <View style={styles.textCon1}>
                <Text style={styles.text2}>
                Movement: Keep moving and changing positions to find the most comfortable and effective positions during labor. Walking, swaying, and changing from sitting to standing can help.
                </Text>
            </View>
            <View style={styles.textCon1}>
                <Text style={styles.text2}>
                Remember, every labor is unique, and it's essential to follow your healthcare provider's guidance and the plan you've developed for your birth. If you have any concerns or questions during labor, don't hesitate to contact your healthcare provider or the healthcare facility where you plan to give birth for advice and support.
                </Text>
            </View>
            
        </View>
    </ScrollView> 
    )
   
}

const styles = StyleSheet.create({

    container:{
        flex:2,
        backgroundColor:"#F4C2C2"
    },

    textCon1:{
        paddingTop:20,
        padding:5
    },

   

    text1:{
        fontSize:16,
        padding:5
    },

    text2:{
        fontSize:14,
        padding:5
    },

      
})