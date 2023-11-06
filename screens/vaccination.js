import React,{Component} from "react";
import {Text,TouchableOpacity,Image,View,StyleSheet,ScrollView} from "react-native"

export default function vaccination() {
    
    return(
    <ScrollView>  
        <View style={styles.container}>
            <View style={styles.textCon1}>
                <Text style={styles.text1}>
                Vaccination during pregnancy is important for several reasons
                </Text>
            </View>
            <View style={styles.textCon1}>
                <Text style={styles.text2}>
                Protection for the mother: Some vaccines can help protect pregnant women from serious and potentially life-threatening diseases, such as influenza (the flu) and pertussis (whooping cough), which can be more severe in pregnant women. By getting vaccinated, a pregnant woman can reduce her risk of these infections.
                </Text>
            </View>
            <View style={styles.textCon1}>
                <Text style={styles.text2}>
                Protection for the baby: Maternal vaccination can provide passive immunity to the newborn. When a pregnant woman receives certain vaccines, like the influenza and Tdap vaccines, her body produces antibodies that can be passed to the baby through the placenta. This can help protect the baby in the early months of life when they are too young to receive some vaccines themselves.
                </Text>
            </View>
            <View style={styles.textCon1}>
                <Text style={styles.text2}>
                Preventing complications: Some vaccine-preventable diseases can lead to complications during pregnancy, such as preterm birth or low birth weight. Vaccination can reduce the risk of these complications.

                </Text>
            </View>
            <View style={styles.textCon1}>
                <Text style={styles.text2}>
                Herd immunity: Pregnant women who get vaccinated can contribute to herd immunity, which is the indirect protection of the broader community against infectious diseases. By reducing the spread of diseases, vaccinated pregnant women help protect those who cannot receive vaccines due to medical contraindications or age.
                </Text>
            </View>
            <View style={styles.textCon1}>
                <Text style={styles.text2}>
                Preventing maternal transmission: Some diseases, such as rubella (German measles), can have severe consequences for the developing fetus. Vaccination can prevent maternal transmission of these diseases to the baby.
                </Text>
            </View>
            <View style={styles.textCon1}>
                <Text style={styles.text2}>
                It's essential to note that not all vaccines are recommended during pregnancy, and the timing of vaccination can be crucial. Pregnant women should consult with their healthcare providers to determine which vaccines are safe and recommended during pregnancy. Generally, the influenza vaccine and the Tdap (tetanus, diphtheria, and pertussis) vaccine are routinely recommended during pregnancy. These vaccines have a proven safety record and can provide significant benefits to both the mother and the baby.
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