// App.js
import React from 'react';
import LoginScreen from './components/Loginscreen';
import HomeScreen from './components/Homescreen';
import AboutScreen from './components/Aboutscreen';
import Registerscreen from './components/Registerscreen';

import { StyleSheet, Text, View } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen
  },
  Register: {
    screen: Registerscreen
  },
  Home: {
    screen: HomeScreen
  },
  About: {
    screen: AboutScreen
  }
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});