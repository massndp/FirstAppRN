import React, { Component } from 'react';
import { Image, StyleSheet, Text, TextInput, View} from 'react-native';
import mackbook from './macbook.jpg';

const App = () => {
  return <StylingReactNativeComponent />;
      
};


const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 100, height: 100, backgroundColor: '#00b894'}}/>
      <Text>Hello</Text>
      <Text>Bayu</Text>
      <Text>Adi</Text>
      <Home />
      <Photo />
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
      <Profile />
  </View>
  );
};


const StylingReactNativeComponent = () => {
  return(
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View style={{
          width: 100, 
          height: 100,
          backgroundColor: '#00b894', 
          borderWidth: 2,
          marginTop: 20,
          marginLeft: 20
         }} 
      />

      <View style={{padding: 12, backgroundColor: '#f2f2f2', width: 212}}>
          <Image source={mackbook} style={{width: 188 , height: 107, borderRadius: 8}} />
          <Text style={{fontSize: 14, fontWeight:'bold', marginTop: 16}}>
           New Macbook Pro M1 2021
          </Text>
          <Text style={{fontSize: 12, fontWeight: 'bold', color:'#f2994a', marginTop: 12}}>
            Rp 21.000.000,-
          </Text>
          <Text style={{fontSize: 12, fontWeight: '300', marginTop: 12}}>
            Bandar Lampung
          </Text>
          <View style={{
            backgroundColor: '#6fcf97',
            paddingVertical: 6,
            borderRadius: 25,
            marginTop: 20
          }}>
            <Text style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center'
            }}>
              Beli
              </Text>
          </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  text:  {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#adadad',
    marginLeft: 20,
    marginTop: 20
  },
});

const Home = () => {
  return <Text>Pratma</Text>;
};

const Photo = () => {
return <Image source={{uri: 'https://placeimg.com/100/100/tech'}} style={{width: 100, height: 100}}/>
}

class BoxGreen extends Component {
  render(){
    return <Text>Ini Component dari Class</Text>
  }
}

class Profile extends Component {
  render(){
    return(
      <View>
        <Image source={{uri: 'https://placeimg.com/100/100/arch'}} style={{width: 100, height: 100}} />
        <Text>Ini Arch</Text>
      </View>

    );
    
  }
}

export default App;