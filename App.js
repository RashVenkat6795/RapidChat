import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import List from './List'
import Details from './Details'
import Registration from './Registration'

const Stack = createStackNavigator();

export default class App extends Component{
  constructor(props){
    super(props);
  }

  RegistrationScreen = (props) => {
    return(
      <Registration {...props}/>
    )
  }

  ListScreen = (props) => {
    return(
      <List {...props}/>
    )
  }

  DetailsScreen = (props) => {
    return(
      <Details {...props}/>
    )
  }

  render(){
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{ flex: 1, backgroundColor:'transparent' }}>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{headerTitleAlign:'center'}} initialRouteName={'Registration'}>
              <Stack.Screen name={'Registration'} component={this.RegistrationScreen}/>
              <Stack.Screen name={'Members List'} component={this.ListScreen}/>
              <Stack.Screen name={'Chat'} component={this.DetailsScreen}/>
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </>
    );
  }
};

const Styles = StyleSheet.create({
  headerStyle:{
    fontSize: 20,
    fontWeight: '800',
    textAlign:'center'
  },
  viewStyle:{
    width:'80%',
    alignSelf:'center',
    marginTop: 20
  },
  inputStyle:{
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'grey',
    padding: 15,
    marginTop: 20
  },
  buttonStyle:{
    backgroundColor:'powderblue',
    padding: 10,
    marginTop: 20,
    width: 170,
    alignSelf:'center',
    alignItems:'center',
    borderRadius: 4
  }
});