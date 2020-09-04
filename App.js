import React, {Component} from 'react';
import {Text, View, Image, TextInput, StyleSheet} from 'react-native';

//Component, dan hanya boleh return 1 Induk. 
const App = () => {
  return (
    <StylingReactNativeComponent/>
  );
};

const StylingReactNativeComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Object</Text>
      <View style={{
        width: 212,
        backgroundColor: '#f4f4f4', 
        paddingVertical: 6, 
        borderRadius: 5, 
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20}}>
        
        <Image source={{uri: 'https://cf.bstatic.com/images/hotel/max1024x768/183/183731414.jpg'}}
        style={{width: 188, height: 100}} />
        <Text>
          New Macbook Pro 2019
        </Text>

        <Text>
          Mahal Gk Usah Beli
        </Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#10ac84',
    marginLeft: 20,
    marginTop: 40,
  }
});

const SampleComponent = () => {
  return (
    <View>
      <View style={{width:80, height:80, backgroundColor: 'blue'}}/>

      <Text>Sampel</Text>
      <Home/>
      <Photo/>

      <Text>Sampul</Text>
      <Text>Sampal</Text>

      <TextInput style={{borderWidth: 1}}/>

      <BoxGreen/>
      <Profile/>
    </View>
  );
}

//Functional Component
const Home = () => {
  return <Text>Oi Kkkkkkkkkk</Text>;
};

const Photo = () => {
  return (
    <Image source={{uri: 'https://cf.bstatic.com/images/hotel/max1024x768/183/183731414.jpg'}} 
    style={{width: 100, height: 100}}/>
  );
};

class BoxGreen extends Component{
  render(){
    return <Text>Ini Komponen Class</Text>;
  }
}

class Profile extends Component{
  render(){
    return (
      <View>
        <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png'}}
      style={{width: 100, height: 100}} />
        <Text>
          Ini Foto Profile GJ
        </Text>
      </View>
    );
  }
}

export default App;