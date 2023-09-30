import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function ContadorDePessoas() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Contador de Pessoas</Text>
      <View style={styles.counterBox}>
        <Text style={styles.counterText}>{count}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={incrementCount}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={decrementCount}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  counterBox: {
    borderWidth: 2,
    borderColor: '#333',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  counterText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    width: 150,
    paddingVertical: 15,
    backgroundColor: '#007bff',
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
