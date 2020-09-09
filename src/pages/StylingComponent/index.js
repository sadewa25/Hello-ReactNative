import React, {Component} from 'react';
import {Text, View, Image, TextInput, StyleSheet} from 'react-native';

const StylingComponent = () => {
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

export default StylingComponent;