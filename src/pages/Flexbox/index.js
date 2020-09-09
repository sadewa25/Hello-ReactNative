import React, {Component} from './../../../node_modules/react';
import {Text, View, Image, TextInput} from 'react-native';

class Flexbox extends Component{

    constructor(props){
        super(props)
        console.log('==> Constructor')
        this.state = {
            subscriber: 100,
        }
    }

    componentDidMount(){
        console.log('==> Compononent Mounting');
        setTimeout(() => {
            this.setState({
                subscriber: 400,
            })
        }, 2000);
    }

    componentDidUpdate(){
        console.log('==> Component Update');
    }

    componentWillUnmount(){
        console.log('==> Component Will unmount')
    }

    render(){
        console.log('==> Render');
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
            <Text>{this.state.subscriber}</Text>

            </View>
        );
    }
}

export default Flexbox;