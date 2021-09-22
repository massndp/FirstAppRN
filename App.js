import React, { Component } from 'react';
import { Image, Text, TextInput, View} from 'react-native';

const App = () => {
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