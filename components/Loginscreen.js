// Aboutscreen.js
import React, { Component } from 'react';
import { Item, StyleSheet, Text, View, TouchableOpacity, ImageBackground, Button, TextInput, Image } from 'react-native';
import IconEvil from 'react-native-vector-icons/EvilIcons'
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class Loginscreen extends Component {
    
  constructor(props){
    super(props)
    this.state={
      username: "",
      password: ""
    }
  }
  
  Validation =()=>{
    const {username, password} = this.state
    if(username ==""){
      alert("Please fill username")
      return false
    } else if(password ==""){
      alert("Please fill passwrd")
      return false
    }
    else if(username != "sonia" || password != "sonia"){
      alert("username/password is incorrect")
      return false
    }
   else{

     return true
   }
  }
  making_api_call=()=>{
    if(this.Validation()){
      this.props.navigation.navigate('Home','sonia')
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/img/login-bg.jpg')} style={{ backgroundColor: '#ccc', flex:1,width: '100%', height: '100%', justifyContent: 'center', }} > 
        <Text style={styles.heading}>Login</Text>
        <View style={{ padding:10 }} > 

        <TouchableOpacity style={styles.inputStyle}>
          <IconEvil name="user" size={35} color="#fff" />
          <TextInput placeholder={'Enter user name'} onChangeText={(value)=>this.setState({username: value})}  style={{height:42, width:"80%", fontSize:20, color:'#fff' }} placeholderTextColor='white'/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.inputStyle}>
          <IconEvil name="lock" size={35} color="#fff" />
          <TextInput placeholder={'Enter password'} onChangeText={(value)=>this.setState({password: value})} style={{height:42, width:"80%",fontSize:20,color:'#fff'  }} placeholderTextColor='white'/>
        </TouchableOpacity>

        <TouchableOpacity style={{borderWidth:1, height:42, width:"100%", justifyContent:"center", alignItems:"center",backgroundColor:"orange", marginTop:"5%", borderWidth:0}} onPress={this.making_api_call }>
          <Text style={{color:"white", fontSize:20}} >Login</Text>
        </TouchableOpacity>
        </View> 
        <TouchableOpacity style={{borderWidth:1, height:42, width:"100%", justifyContent:"center", alignItems:"center",  borderWidth:0}}  onPress={()=>this.props.navigation.navigate('Register')}>
        <Text style={{ fontSize:20}}>Register</Text>
        </TouchableOpacity>
        
        </ImageBackground > 
        
      </View>
    )
  }
}
Loginscreen.navigationOptions = {
  headerTitle: '',
  headerShown:false,
  headerLeft: () => {
    return null;
  },
};
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  heading: {
    fontSize:30,
    textAlign:'center',
    margin:10,
    fontWeight:'bold',
    color:'#fff'
  },
  inputStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:2,
    borderRadius:20,
    margin: 10,
    borderColor: '#eee'
  }
})
