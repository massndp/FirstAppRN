/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Story = (props) => {
  return (
    <View style={{ alignItems: 'center', marginRight: 20 }}>
      <Image source={{ uri: props.gambar }} style={styles.image} />
      <Text style={{ maxWidth: 50, textAlign: 'center' }}>{props.judul}</Text>
    </View>
  );
};

const PropsDimanis = () => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ marginBottom: 10, fontSize: 20, fontWeight: 'bold' }}>
        Meteri Component Dinamis Dengan Props
      </Text>
      <ScrollView horizontal>
        <View style={{ flexDirection: 'row' }}>
          <Story
            judul="First Story"
            gambar="https://placeimg.com/100/100/tech"
          />
          <Story
            judul="Second Story"
            gambar="https://placeimg.com/100/100/animals"
          />
          <Story
            judul="Third Story"
            gambar="https://placeimg.com/100/100/people"
          />
          <Story
            judul="Fourth Story"
            gambar="https://placeimg.com/100/100/tech"
          />
          <Story
            judul="Fiveth Story"
            gambar="https://placeimg.com/100/100/animal"
          />
          <Story
            judul="Sixth Story"
            gambar="https://placeimg.com/100/100/people"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PropsDimanis;

const styles = StyleSheet.create({
  image: { width: 70, height: 70, borderRadius: 70 / 2 },
});
