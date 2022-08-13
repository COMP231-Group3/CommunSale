import React, {Component, useState} from 'react';
import { StyleSheet, View, Text, FlatList, TextInput, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import formik from 'formik';
{/*Need password validation function*/}

export default function App() {
    return (
        <SafeAreaView style = {styles.topContainer}>
         <image style={styles.logo} source={require('../assets/smLogo.jpg')}></image>
         <text style ={{fontsize: 20, fontWeight: 'bold'}}>Save and Sell Local</text>
         <text style ={{fontsize: 12}}>Complete the Following Fields to Register!</text>
        </SafeAreaView>,
        <SafeAreaView style = {styles.container}>
          <formik>
             <text>Email</text>
             <TextInput style = {styles.input} placeholder = 'email@domain.net' 
             autoComplete = 'email' textContentType='username'></TextInput>
             <text>Password 8-20 Characters</text>
             <TextInput style = {styles.input} value = {this.state.password} 
             placeholder = "Password" secureTextEntry= {true} 
             autoComplete = 'password-new' textContentType='newPassword'>{this.state.confirmPasswordErrorMessage.length > 0 && <Text style={styles.textDanger}>
                {this.state.confirmPasswordErrorMessage}</Text>}</TextInput>
             <text>Confirm Password</text>
             <TextInput style = {styles.input} value = {this.state.password} 
             placeholder = "Password" secureTextEntry= {true} autoComplete = 'password' 
             textContentType='password'>{this.state.confirmPasswordErrorMessage.length > 0 && <Text style={styles.textDanger}>
                {this.state.confirmPasswordErrorMessage}</Text>}</TextInput>
             <text style = {{fontWeight: 'bold'}}>Home Address:</text>
             <text>Use Phone Location:</text> {/* Put radio button here, probably have to use paper*/}
             <text>Street Address</text>
             <TextInput style = {styles.input} placeholder = '123 Front Street' autoComplete = 'street-address' textContentType='fullStreetAddress'></TextInput>
             <text>City</text>
             <TextInput style = {styles.input} placeholder = 'Toronto' autoComplete = 'email' textContentType='emailAddress'></TextInput>
             <text>Province</text>
             <TextInput style = {styles.input} placeholder = 'email@domain.net' autoComplete = 'email' textContentType='emailAddress'></TextInput>
             
            <TouchableOpacity style={styles.registerButton} onPress={submitRegistration}>
          <Text style={styles.textButton}>Register</Text>
        </TouchableOpacity>
        </formik>
        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    topContainer: {
        flex:0.3, 
        alignItems: "center",
        justifyContent: "center"
    },
    container: {
        flex:1, 
        alignItems: "center",
        justifyContent: "center"
    },
    logo: {
        flex:0.3, 
        alignItems: "center",
        justifyContent: "center"
    },
input: {
  height: 40,
  margin: 12,
  borderWidth: 1,
  padding: 10,
  width: '70%',
  borderRadius: 5,
},
    registerButton: {
        width: '20%',
        height: 40,
        margin: 12,
        backgroundColor: color.backgroundButton,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.backgroundButton,
        borderRadius: 4,
        shadowColor: color.shadow,
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      }
      
})
