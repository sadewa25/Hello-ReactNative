import React, {Component, useState, useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import {SampleComponent} from './pages/SampleComponent'
import StylingComponent from './pages/StylingComponent'
import Flexbox from './pages/Flexbox'
import Position from './pages/Position'
import StateDinamis from './pages/StateDinamis';
import BasicJavascript from './pages/BasicJavascript';
import ReactSvg from './pages/ReactSvg';

//Component, dan hanya boleh return 1 Induk. 
const App = () => {
  const [isShow, SetIsShow] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      SetIsShow(false);
    }, 6000);
  }, []);

  return (
    <View>
      <ScrollView>
        {/* <SampleComponent/>
        <StylingComponent/>
        <Position/> */}
        {/* {isShow && <Flexbox/>} */}
        <StateDinamis/>
        <BasicJavascript/>
        <ReactSvg/>
      </ScrollView>
    </View>
  );
};


export default App;