import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import macbook from '../../assets/image/macbook.jpg';

const Product = (props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.imageStyle}>
        <Image
          source={macbook}
          style={{ width: 188, height: 107, borderRadius: 8 }}
        />
        <Text style={styles.title}>New Macbook Pro M1 2021</Text>
        <Text style={styles.price}>Rp 21.000.000,- </Text>
        <Text style={styles.city}>Bandar Lampung</Text>
        <TouchableOpacity onPress={props.onButtonPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Beli</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    marginTop: 30,
  },
  imageStyle: {
    padding: 12,
    backgroundColor: '#f2f2f2',
    width: 212,
    borderRadius: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 16,
  },
  price: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#f2994a',
    marginTop: 12,
  },
  city: {
    fontSize: 12,
    fontWeight: '300',
    marginTop: 12,
  },
  button: {
    backgroundColor: '#6fcf97',
    paddingVertical: 6,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
});
