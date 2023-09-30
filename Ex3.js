import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const multiplyNumbers = () => {
    const resultValue = parseFloat(num1) * parseFloat(num2);
    setResult(resultValue.toString());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Multiplicador de Números</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o primeiro nº"
        keyboardType="numeric"
        onChangeText={(text) => setNum1(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite o segundo nº"
        keyboardType="numeric"
        onChangeText={(text) => setNum2(text)}
      />
      <TouchableOpacity style={styles.button} onPress={multiplyNumbers}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
      {result !== null && (
        <View>
          <Text style={styles.resultText}>Resultado:</Text>
          <Text style={styles.result}>{result}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  resultText: {
    fontSize: 18,
    marginTop: 10,
  },
  result: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 5,
  },
});
