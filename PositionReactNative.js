import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import cart from './cart.png';

const PositionReactNative = () => {
  return (
    <View style={styles.wrapper}>
      <Text>Materi Position</Text>
      <View style={styles.cartWrapper}>
        <Image source={cart} style={styles.iconCart} />
        <Text style={styles.notif}>8</Text>
      </View>
      <Text style={styles.text}>Keranjang belanja anda</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { padding: 20, alignItems: 'center' },
  cartWrapper: {
    borderWidth: 1,
    borderColor: '#4398d1',
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginTop: 20,
  },
  iconCart: { width: 50, height: 50 },
  text: { fontSize: 12, fontWeight: 'bold', marginTop: 8 },
  notif: {
    fontSize: 12,
    color: 'white',
    backgroundColor: '#6fcf97',
    padding: 4,
    borderRadius: 25,
    width: 24,
    height: 24,
    textAlign: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
  },
});

export default PositionReactNative;
