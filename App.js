import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import {SampleComponent} from './SampleComponent';
import StylingReactNativeComponent from './StylingReactNativeComponent';
import MateriFlexBox from "./MateriFlexBox";
import PositioningReactNatice from './PositionReactNative'

//Component, dan hanya boleh return 1 Induk. 
const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent/>
        <StylingReactNativeComponent/> */}
        {/* <MateriFlexBox/> */}
        <PositioningReactNatice/>
      </ScrollView>
    </View>
  );
};


export default App;