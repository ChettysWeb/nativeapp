// Aboutscreen.js
import React, { Component } from 'react';
import { Button, View, Text, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class Aboutscreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          style={{width: 300,height:200,backgroundColor:"red"}}
          source={{
            uri:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR20x8bJ3J8WSIvzlm_uJKYZqSNAft5uXPRkWcd5pWb2I7N2Lpw"
          }}
          resizeMode="center"
        />
      </View>
    )
  }
}