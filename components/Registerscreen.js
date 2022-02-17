// Aboutscreen.js
import React, { Component } from 'react';
import { Item, StyleSheet, Text, View, TouchableOpacity, ImageBackground, Button, TextInput, Image } from 'react-native';
import IconEvil from 'react-native-vector-icons/EvilIcons'
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class Registerscreen extends Component {
    
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
    return true
  }
  making_api_call=()=>{
    if(this.Validation()){
      this.props.navigation.navigate('Home')
      
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/img/register-bg.jpeg')} style={{ backgroundColor: '#ccc', flex:1,width: '100%', height: '100%', justifyContent: 'center', }} > 
        <Text style={styles.heading}>Signup</Text>

        <View style={{ padding:10 }} > 

          <TouchableOpacity style={styles.inputStyle}>
            <IconEvil name="user" size={35} color="#000" />
            <TextInput placeholder={'Enter first name'} onChangeText={(value)=>this.setState({username: value})}  style={{height:42, width:"80%", fontSize:20, color:'#000' }} placeholderTextColor='#000'/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.inputStyle}>
            <IconEvil name="user" size={35} color="#000" />
            <TextInput placeholder={'Enter last name'} onChangeText={(value)=>this.setState({username: value})}  style={{height:42, width:"80%", fontSize:20, color:'#000' }} placeholderTextColor='#000'/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.inputStyle}>
            <IconEvil name="user" size={35} color="#000" />
            <TextInput placeholder={'Enter user name'} onChangeText={(value)=>this.setState({username: value})}  style={{height:42, width:"80%", fontSize:20, color:'#000' }} placeholderTextColor='#000'/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.inputStyle}>
            <IconEvil name="lock" size={35} color="#000" />
            <TextInput placeholder={'Enter password'} onChangeText={(value)=>this.setState({password: value})} style={{height:42, width:"80%",fontSize:20,color:'#000'  }} placeholderTextColor='#000'/>
          </TouchableOpacity>

          <TouchableOpacity style={{borderWidth:1, height:42, width:"100%", justifyContent:"center", alignItems:"center",backgroundColor:"orange", marginTop:"10%", borderWidth:0, borderRadius:40}} >
            <Text style={{color:"#000", fontSize:20}} >Signup</Text>
          </TouchableOpacity>
          </View> 
          <TouchableOpacity style={{borderWidth:1, height:42, width:"100%", justifyContent:"center", alignItems:"center",  borderWidth:0}}  onPress={()=>this.props.navigation.navigate('Login')}>
          <Text style={{color:"#000", fontSize:20}} >Already have account? Login</Text>
          </TouchableOpacity>
        
        </ImageBackground > 
        
      </View>
    )
  }
}
Registerscreen.navigationOptions = {
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
    color:'#000'
  },
  inputStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth:1,
    borderRadius:20,
    margin: 10,
    borderColor: '#000'
  }
})
