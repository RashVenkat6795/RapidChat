import React, {Component} from 'react'
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native'

const Options = [
    {'name': 'Reggie Bigornia', 'image': require('./men.jpg')},
    {'name': 'Sandra Chuma', 'image': require('./user.jpg')},
    {'name': 'Joshua', 'image': require('./men.jpg')},
    {'name': 'Rashmika', 'image': require('./user.jpg')},
    {'name': 'Syam Kishore', 'image': require('./men.jpg')},
    {'name': 'Shyamala', 'image': require('./user.jpg')},
    {'name': 'Fathi', 'image': require('./men.jpg')},
    {'name': 'Tina', 'image': require('./user.jpg')},
]
export default class List extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <View style={{ flex: 1 }}>
                <FlatList
                    style={{ flex: 1 }}
                    data={Options}
                    keyExtractor={item => item.name}
                    renderItem={({item,index}) => {
                        return (
                            <TouchableOpacity key={index} onPress={() => this.props.navigation.navigate('Details',{item: item})} style={{ flexDirection:'row', alignItems:'center', borderBottomColor:'grey', borderBottomWidth: 1, padding: 10 }}>
                                <Image source={item.image} style={{ width:40, height: 40, borderRadius: 20}}/>
                                <Text>{item.name}</Text>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        )
    }
}