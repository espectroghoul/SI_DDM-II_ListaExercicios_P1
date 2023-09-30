import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState(null);

  const calculateIMC = () => {
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);

    if (!isNaN(weightValue) && !isNaN(heightValue) && heightValue > 0) {
      const imc = weightValue / (heightValue * heightValue);
      setResult(getClassification(imc));
    } else {
      setResult('Insira valores válidos para peso e altura');
    }
  };

  const getClassification = (imc) => {
    if (imc < 18.5) {
      return 'Abaixo do Peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
      return 'Peso Normal';
    } else if (imc >= 25 && imc <= 29.9) {
      return 'Sobrepeso';
    } else if (imc >= 30 && imc <= 34.9) {
      return 'Obesidade Grau I';
    } else if (imc >= 35 && imc <= 39.9) {
      return 'Obesidade Grau II';
    } else {
      return 'Obesidade Mórbida (Grau III)';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cálculo do IMC</Text>
      <Image
        style={styles.image}
        source={{ uri: 'https://play-lh.googleusercontent.com/yc_iTThxehE0XKnspc_d9Hal_OgRAPY-9SeTKw_HnT1SMG_CEEkU02Xk2Y0-t-MTEQ' }}
      />
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        onChangeText={(text) => setWeight(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura (m)"
        keyboardType="numeric"
        onChangeText={(text) => setHeight(text)}
      />
      <TouchableOpacity style={styles.button} onPress={calculateIMC}>
        <Text style={styles.buttonText}>Verificar</Text>
      </TouchableOpacity>
      {result !== null && (
        <View>
          <Text style={styles.resultText}>Classificação:</Text>
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
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
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
