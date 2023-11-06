import React from "react";
import {Text,TouchableOpacity,Image,View,StyleSheet} from "react-native"
import { useNavigation } from '@react-navigation/native';

export default function weight() {
    return(
        <View style={styles.container}>
             <View style={styles.textContainer1}>
                <Text style={styles.text1}>Weight Gain During Pregnancy</Text>
            </View>
            <View style={styles.textContainer1}>
                <Text style={styles.text2}>In the first trimester (up to 12 weeks), it's common for women to gain 1-5 pounds (about 0.45-2.3 kilograms).</Text>
            </View>
            <View style={styles.textContainer1}>
                <Text style={styles.text2}>In the second and third trimesters (13-40 weeks), a gradual and steady weight gain is expected. Most women gain about 1 pound (0.45 kilograms) per week during this time, but this can vary.</Text>
            </View>
            <View style={styles.textContainer1}>
                <Text style={styles.text3}>Factors Influencing Weight Gain</Text>
            </View>
            <View style={styles.textContainer1}>
                <Text style={styles.text2}>Every pregnancy is different, and individual factors can influence weight gain. These factors include the woman's starting BMI, age, multiple pregnancies (e.g., twins), and underlying medical conditions.</Text>
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
        alignItems:'center',
        paddingTop:20
    },

    text1:{
        fontWeight:'bold',
        fontSize:22
    },

    text3:{
        fontWeight:'bold',
        fontSize:20
    },
    
    text2:{
        fontWeight:'500',
        fontSize:17,
        padding:5
    }

})