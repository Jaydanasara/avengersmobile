import React, { Component } from 'react';
import { View, Text, StyleSheet,Button} from 'react-native';
import * as Google from 'expo-google-app-auth';
import firebase from "firebase";


export default class LoginScreen extends Component {

  isUserEqual=(googleUser, firebaseUser) =>{
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
            providerData[i].uid === googleUser.getBasicProfile().getId()) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  }

  onSignIn=googleUser=> {
    console.log('Google Auth Response', googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged(function(firebaseUser) {
      unsubscribe();
      // Check if we are already signed-in Firebase with the correct user.
      if (!this.isUserEqual(googleUser, firebaseUser)) {
        console.log(googleUser, firebaseUser)
        // Build Firebase credential with the Google ID token.
        var credential = firebase.auth.GoogleAuthProvider.credential(
            googleUser.idToken,
            googleUser.accessToken);

        // Sign in with credential from the Google user.
        firebase.auth().signInAndRetrieveDataWithCredential(credential)
        .then(function(result){
          console.log (result);
          console.log("user signed in ");
          firebase
          .database()
            .ref('/users/'+ result.user.uid)
            .set({
              gmail: result.user.email,
              profile_picture: result.additionalUserInfo.profile.picture,
              locale: result.additionalUserInfo.profile.locale,
              first_name: result.additionalUserInfo.profile.given_name,
              last_name: result.additionalUserInfo.profile.family_name
            })
          .then(function(snapshot){
            console.log ("snapshot",snapshot)
          })
        }) 
        .catch(function(error) {
          console.log (error);
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
      } else {
        console.log('User already signed-in Firebase.');
      }
    }.bind(this)
    );
  }

 

  signInWithGoogleAsync= async()=> {
    try {
      const result = await Google.logInAsync({
 
        androidClientId: "121402415852-ujc6710tnfu37jr4et0s28nrqhgu8m9i.apps.googleusercontent.com",
        
        scopes: ['profile', 'email'],
      });
  
      if (result.type === 'success') {
        this.onSignIn(result);
        return result.accessToken;
      } else {
        
        return { cancelled: true };
      }
    } catch (e) {
      console.log(e)
      return { error: true };
    }
  }


  render() {
    return (
      <View style= {styles.container}>
        <Button title="Sign in With Google" onPress={()=> this.signInWithGoogleAsync()}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});