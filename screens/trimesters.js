import React,{Component} from "react";
import {Text,TouchableOpacity,Image,View,StyleSheet,ScrollView} from "react-native"

export default function trimesters() {
    
    return(
    <ScrollView>  
        <View style={styles.container}>
            <View style={styles.textCon1}>
                <Text style={styles.text1}>
                Certainly, here's some additional information on each of the three trimesters of pregnancy:
                </Text>
            </View>
            <View style={styles.textCon1}>
                <Text style={styles.text2}>
                First Trimester (Weeks 1-12): This stage is crucial for the initial development of the fetus. During the first trimester, the fertilized egg implants in the uterus, and the baby's major organs, such as the heart, brain, and limbs, begin to form. Many women experience symptoms like morning sickness, breast tenderness, and fatigue during this phase. It's also the time when the first ultrasound is usually performed to confirm the pregnancy and estimate the due date.
                </Text>
            </View>
            <View style={styles.textCon1}>
                <Text style={styles.text2}>
                Second Trimester (Weeks 13-28): Often considered the "honeymoon" phase of pregnancy, the second trimester is characterized by reduced morning sickness and increased energy for many women. By the midpoint of this trimester, the baby's sex can often be determined through ultrasound. The fetus continues to grow rapidly, and expectant mothers may feel their baby's first movements, known as "quickening." This trimester is a time of significant fetal development, with the baby's sensory organs becoming more functional.
                </Text>
            </View>
            <View style={styles.textCon1}>
                <Text style={styles.text2}>
                Third Trimester (Weeks 29-40 or until birth): The final trimester is marked by the most rapid growth of the fetus. The baby gains weight and prepares for life outside the womb. However, it can also be the most physically challenging for the expectant mother, as she may experience increased discomfort, backaches, swelling, and difficulty sleeping. Frequent prenatal check-ups become essential during this phase to monitor the baby's position and prepare for labor and delivery. Typically, labor begins at some point in the third trimester, leading to the birth of the baby.
                </Text>
            </View>
            <View style={styles.textCon1}>
                <Text style={styles.text2}>
                Throughout all three trimesters, proper prenatal care, a healthy diet, regular exercise, and emotional support are important for the well-being of both the mother and the developing baby. Each trimester comes with its unique set of experiences and challenges, but it ultimately leads to the incredible moment of childbirth and the start of the parenting journey.
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
        paddingTop:20
    },

   

    text1:{
        fontSize:16
    },

    text2:{
        fontSize:14
    },

      
})