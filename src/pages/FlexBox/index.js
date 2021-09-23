/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import photoProfile from '../../assets/image/ori.jpg';

class FlexBox extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#c8d6e5',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          {/* <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Materi Flex Box
        </Text> */}
          <View style={{ backgroundColor: '#ee5253', width: 50, height: 50 }} />
          <View style={{ backgroundColor: '#feca57', width: 50, height: 50 }} />
          <View style={{ backgroundColor: '#1dd1a1', width: 50, height: 50 }} />
          <View style={{ backgroundColor: '#5f27cd', width: 50, height: 50 }} />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Text>Home</Text>
          <Text>Videos</Text>
          <Text>Playlist</Text>
          <Text>Community</Text>
          <Text>Channel</Text>
          <Text>About</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={photoProfile}
            style={{
              width: 150,
              height: 150,
              borderRadius: 75,
              marginRight: 15,
              marginTop: 15,
            }}
          />
          <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
              Bayu Adi Pratama
            </Text>
            <Text>2M Followers</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default FlexBox;
