import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign'
import IconEnt from 'react-native-vector-icons/Entypo'

export default class Homescreen extends Component {
  // constructor(props){
  //   super(props)
  //   this.state={
  //     username: this.props.navigation.getParam(username, 'Guest')
  //   }
    
  // }
  
  render(){
   
    return (
      <View style={styles.container}>
        <View style={{backgroundColor:"orange", height:"10%", width: "100%",  
        justifyContent:"center", alignItems:"center", flexDirection:"row"}}>
          <TouchableOpacity >
            <IconEnt name="home" size={35} color="#fff" style={{marginTop:10}}/>
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft:20, marginRight:20}}>
            <IconAnt name="sharealt" size={35} color="#fff" style={{marginTop:20}}/>
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft:20, marginRight:20}}>
            <IconEnt name="chat" size={35} color="#fff" style={{marginTop:20}}/>
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft:20, marginRight:20}}>
            <IconAnt name="search1" size={35} color="#fff" style={{marginTop:20}}/>
          </TouchableOpacity>
          
        </View>
      <View>
        <Button title="Go to About" onPress={()=>this.props.navigation.navigate('About')}></Button>
    
      </View>
      </View>

 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5FCFF',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  welcome:{
    fontSize:20,
    textAlign:'center',
    margin:10,
  },
  instrctins:{
    textAlign:'center',
  }
});

Homescreen.navigationOptions = {
  headerTitle: '',
  headerShown:false,
  headerLeft: () => {
    return null;
  },
};