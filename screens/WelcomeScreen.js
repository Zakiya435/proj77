import React, { Component } from 'react';
import{View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Alert, Modal, KeyboardAvoidingView} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:'',
        }
    }
    
    userLogin=(emailid,password)=>{
     firebase.auth().signInWithEmailAndPassword(emailid,password)
     .then(()=>{
         return(Alert.alert("Successfully Login"))
     })
     .catch((error)=>{
      var errorCode = error.code;
      var errorMessages = error.message;
      return(Alert.alert(errorMessages))
     })
    }

    userSignup=(emailId,password)=>{

        firebase.auth().createUserWithEmailAndPassword(emailId,password)
        .then(()=>{
        return Alert.alert("User Added Succesfully")
         
        .catch((error)=>{
         var errorCode = error.code;
         var errorMessages = error.message;
         return(Alert.alert(errorMessages))
        });
        })
       }
    
       render(){
           return(
            <View style={styles.container}> 
            <View style={styles.profileContainer}>
                <Text style={styles.title}>Barter App</Text>
                  </View>
            <View style={styles.buttonContainer}> 
                   <TextInput style={styles.loginBox} 
                   placeholder="example@barter.com" 
                   placeholderTextColor = "#ffff" 
                   keyboardType ='email-address' 
                   onChangeText={(text)=>{ this.setState({ emailId: text }) 
                   }} /> 
                   <TextInput style={styles.loginBox} 
                   secureTextEntry = {true} 
                   placeholder="password" 
                   placeholderTextColor = "#ffff" 
                   onChangeText={(text)=>{ this.setState({ password: text }) 
                   }} />

                <TouchableOpacity style={[styles.button,{marginBottom:20, marginTop:20}]}
                 onPress = {()=>{
                     this.userLogin(this.state.emailId, this.state.password)}} >
                         <Text style={styles.buttonText}>Login</Text> 
                         </TouchableOpacity>
                         <TouchableOpacity style={styles.button} 
                         onPress={()=>{this.userSignup(this.state.emailId, this.state.password)}} > 
                         <Text style={styles.buttonText}>SignUp</Text> 
                    </TouchableOpacity>
                </View>
            </View>
           )
       }
    }
    const styles = StyleSheet.create({
        container:{
         flex:1,
         backgroundColor:'#F8BE85',
         alignItems: 'center',
         justifyContent: 'center'
       },
       profileContainer:{
         flex:1,
         justifyContent:'center',
         alignItems:'center',
       },
       title :{
         fontSize:65,
         fontWeight:'300',
         paddingBottom:30,
         color : '#ff3d00'
       },
       loginBox:{
         width: 300,
         height: 40,
         borderBottomWidth: 1.5,
         borderColor : '#ff8a65',
         fontSize: 20,
         margin:10,
         paddingLeft:10
       },
       KeyboardAvoidingView:{
         flex:1,
         justifyContent:'center',
         alignItems:'center'
       },
       formTextInput:{
         width:"75%",
         height:35,
         alignSelf:'center',
         borderColor:'#ffab91',
         borderRadius:10,
         borderWidth:1,
         marginTop:20,
         padding:10
       },
       registerButton:{
         width:200,
         height:40,
         alignItems:'center',
         justifyContent:'center',
         borderWidth:1,
         borderRadius:10,
         marginTop:30
       },
       registerButtonText:{
         color:'#ff5722',
         fontSize:15,
         fontWeight:'bold'
       },
       cancelButton:{
         width:200,
         height:30,
         justifyContent:'center',
         alignItems:'center',
         marginTop:5,
       },
      
       button:{
         width:300,
         height:50,
         justifyContent:'center',
         alignItems:'center',
         borderRadius:25,
         backgroundColor:"#ff9800",
         shadowColor: "#000",
         shadowOffset: {
            width: 0,
            height: 8,
         },
         shadowOpacity: 0.30,
         shadowRadius: 10.32,
         elevation: 16,
         padding: 10
       },
       buttonText:{
         color:'#ffff',
         fontWeight:'200',
         fontSize:20
       }
      })