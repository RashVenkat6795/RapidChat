import React, {Component} from 'react'
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native'

export default class Registration extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: ''
        }
    }

    render(){
        return(
            <View style={Styles.viewStyle}>
                <Text style={Styles.headerStyle}> Rapid Chat</Text>
                <TextInput
                    style={Styles.inputStyle}
                    placeholder={'Enter username'}
                    value={this.state.username}
                    onChangeText={username => this.setState({ username }) }
                />
                <TouchableOpacity style={Styles.buttonStyle} onPress={() => this.props.navigation.navigate('Members List')}>
                    <Text>Get Started</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    headerStyle:{
      fontSize: 20,
      fontWeight: '800',
      textAlign:'center'
    },
    viewStyle:{
      width:'80%',
      alignSelf:'center',
      marginTop: 20,
    //   backgroundColor:'white'
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