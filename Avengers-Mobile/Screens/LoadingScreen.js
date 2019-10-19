
import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import firebase from "firebase"

export default class LoadingScreen extends Component {

//   componentDidMount(){
//     this.checkIfLoggedIn();
//   }
//  checkIfLoggedIn=()=>{
//    firebase.auth().onAuthStateChanged(function(user)
//    {
//       if (user)
//       {
//         this.props.navigation.navigate
//         ("DashboardScreen");

//       }else{
//         this.props.navigation.navigate("LoginScreen");
//       }
//    }.bind(this)
//    );
//  }


  render() {
    return (
      <View style= {styles.container}>
       
        <Text>Loading Now</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    
    alignItems: 'center',
    justifyContent: 'center',
  },
});