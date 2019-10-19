import React from 'react'
import { Image, StyleSheet, View,TouchableOpacity,TouchableWithoutFeedback } from "react-native";



const CharacterCard = props => {


    const { pic, name, handleClick, id, } = props
    return (
    //   <View style= {styles.imageView}>
           <TouchableWithoutFeedback activeOpacity={.5}onPress={()=>handleClick(id) } style={styles.picContainer} >
            <Image  source={pic}   style= {styles.pics}  />

            </TouchableWithoutFeedback>
            // </View >
    );
}

const styles= StyleSheet.create({
pics:{
  width:"16.5%",
  height :"20%",
 backgroundColor:"pink",
alignItems: 'center',
},
picContainer:{

    
},
imageView:{
  
  
  backgroundColor :"blue",
 
}


})





export default CharacterCard;