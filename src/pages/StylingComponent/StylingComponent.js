/* eslint-disable react-native/no-inline-styles */
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
import mackbook from '../../assets/image/macbook.jpg';

const StylingComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#00b894',
          borderWidth: 2,
          marginTop: 20,
          marginLeft: 20,
        }}
      />

      <View style={{ padding: 12, backgroundColor: '#f2f2f2', width: 212 }}>
        <Image
          source={mackbook}
          style={{ width: 188, height: 107, borderRadius: 8 }}
        />
        <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 16 }}>
          New Macbook Pro M1 2021
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: '#f2994a',
            marginTop: 12,
          }}>
          Rp 21.000.000,-
        </Text>
        <Text style={{ fontSize: 12, fontWeight: '300', marginTop: 12 }}>
          Bandar Lampung
        </Text>
        <View
          style={{
            backgroundColor: '#6fcf97',
            paddingVertical: 6,
            borderRadius: 25,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}>
            Beli
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#adadad',
    marginLeft: 20,
    marginTop: 20,
  },
});

export default StylingComponent;
