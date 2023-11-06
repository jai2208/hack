import React,{Component} from "react";
import {Text,TouchableOpacity,Image,View,StyleSheet,ScrollView} from "react-native"

export default function trimesters() {
    
    return(
    
        <View style={styles.container}>
            <View style={styles.textCon1}>
                <Text style={styles.text1}>
                Proper nutrition during pregnancy is essential for the health of both the mother and the developing baby. A well-balanced diet can help ensure that you get the necessary nutrients and energy to support the growth and development of the fetus. Here are some key guidelines for nutrition and diet during pregnancy:
                </Text>
            </View>
            <View style={styles.textCon1}>
                <Text style={styles.text2}>
                Iron: Pregnant women need more iron to support increased blood production and the baby's development. Good sources of iron include lean meats, beans, and fortified cereals.
                </Text>
            </View>
            <View style={styles.textCon1}>
                <Text style={styles.text2}>
                Calcium: Calcium is essential for the baby's bone development. You can get it from dairy products, fortified plant-based milk, and green leafy vegetables.
                </Text>
            </View>
            <View style={styles.textCon1}>
                <Text style={styles.text2}>
                Protein: Protein is crucial for the development of the baby's organs and tissues. Good sources include lean meats, poultry, fish, eggs, dairy, and plant-based proteins like beans and tofu.
                </Text>
            </View>
            <View style={styles.textCon1}>
                <Text style={styles.text2}>
                Fiber: Constipation can be a common issue during pregnancy. High-fiber foods like fruits, vegetables, whole grains, and legumes can help alleviate this.
                </Text>
            </View>
            <View style={styles.textCon1}>
                <Text style={styles.text2}>
                Limit Caffeine: High caffeine intake has been associated with a higher risk of miscarriage and preterm birth. It's advisable to limit your caffeine intake during pregnancy.
                </Text>
            </View>
            <View style={styles.textCon1}>
                <Text style={styles.text2}>
                Weight Gain: Weight gain during pregnancy is expected, but it should be within a healthy range. Your healthcare provider can help you determine what's right for you.
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
        paddingTop:20,
        padding:5
    },

   
    text1:{
        fontSize:16
    },

    text2:{
        fontSize:14
    },

      
})