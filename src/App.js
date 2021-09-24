/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import SampleComponent from './pages/SampleComponent';
import StylingComponent from './pages/StylingComponent/StylingComponent';
import FlexBox from './pages/FlexBox/';
import Position from './pages/Position/';
import PropsDimanis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis';
import Communication from './pages/Communication';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent /> */}
        {/* <StylingComponent /> */}
        {/* <FlexBox /> */}
        {/* <Position /> */}
        {/* <PropsDimanis /> */}
        {/* <StateDinamis /> */}
        <Communication />
      </ScrollView>
    </View>
  );
};

export default App;
