import React, {Component} from 'react';
import {Text, View, Image, TextInput} from 'react-native';

class MateriFlexBox extends Component{
    render(){
        return (
            <View>
                <View style={{
                flexDirection: 'row', 
                backgroundColor: '#ededed',
                alignItems: 'center',
                justifyContent:'space-between'
                }}>
                    <View style={{backgroundColor: '#c1185b', width:50, height: 50}}/>
                    <View style={{backgroundColor: '#b2dfdb', flex:1, height: 100}}/>
                    <View style={{backgroundColor: '#4fc3f7', flex:2, height: 150}}/>
                    <View style={{backgroundColor: '#aed581', flex:3, height: 200}}/>
                </View>
                <View style={{
                    marginTop: 24,
                    flexDirection: 'row', 
                    backgroundColor: '#ededed',
                    alignItems: 'center',
                    justifyContent:'space-between'
                }}>
                    <View style={{backgroundColor: '#c1185b', width:50, height: 50}}/>
                    <View style={{backgroundColor: '#b2dfdb', width:50, height: 100}}/>
                    <View style={{backgroundColor: '#4fc3f7', width:50, height: 150}}/>
                    <View style={{backgroundColor: '#aed581', width:50, height: 200}}/>
                </View>
            </View>
        );
    }
}

export default MateriFlexBox;