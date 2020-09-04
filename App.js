import React from 'react';
import {Text, View, Image, TextInput} from 'react-native';

//Component, dan hanya boleh return 1 Induk. 
const App = () => {
  return (
    <View>
      <View style={{width:80, height:80, backgroundColor: 'blue'}}/>

      <Text>Sampel</Text>
      <Home/>
      <Photo/>

      <Text>Sampul</Text>
      <Text>Sampal</Text>

      <TextInput style={{borderWidth: 1}}/>
    </View>
  );
};

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

export default App;