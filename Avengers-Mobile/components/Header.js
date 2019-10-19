import React, { Component } from 'react';
import { Text, View,Button,StyleSheet } from 'react-native';
import firebase from "firebase";
export default class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Text> Avengers Memory Game </Text>
                <Text>Top score</Text>
                <Button title="SIGN OUT"   onPress={() => firebase.auth().signOut()} />
            </View>
        )
    }
}


const styles = StyleSheet.create({
header:{
    flexDirection:"row",
alignItems:"center",
   justifyContent:"space-between",
    height:"8%",
    width:"100%",
   
    marginTop:"6%",
    
},



})