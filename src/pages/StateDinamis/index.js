import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Counter = () => {
  const [angka, setAngka] = useState(0);
  return (
    <View>
      <Text>{angka}</Text>
      <Button title="tambah" onPress={() => setAngka(angka + 1)} />
    </View>
  );
};

class CounterClass extends Component {
  state = {
    angka: 0,
  };
  render() {
    return (
      <View>
        <Text>{this.state.angka}</Text>
        <Button
          title="Tambah"
          onPress={() => this.setState({ angka: this.state.angka + 1 })}
        />
      </View>
    );
  }
}

const StateDinamis = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textTitle}>
        Materi Component Dinamis dengan State
      </Text>
      <Text style={{ marginTop: 20 }}>Function Component (Hooks)</Text>
      <Counter />
      <Text style={{ marginTop: 20 }}>Function Component (Class)</Text>
      <CounterClass />
    </View>
  );
};

export default StateDinamis;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
  },
});
