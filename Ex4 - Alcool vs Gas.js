import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [alcoholPrice, setAlcoholPrice] = useState('');
  const [gasolinePrice, setGasolinePrice] = useState('');
  const [result, setResult] = useState(null);

  const calculateAdvantage = () => {
    const alcohol = parseFloat(alcoholPrice);
    const gasoline = parseFloat(gasolinePrice);

    if (!isNaN(alcohol) && !isNaN(gasoline)) {
      const ratio = alcohol / gasoline;

      if (ratio < 0.7) {
        setResult('Abasteça com Álcool');
      } else {
        setResult('Abasteça com Gasolina');
      }
    } else {
      setResult('Insira valores válidos para os preços');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Álcool ou Gasolina</Text>
      <Image
        style={styles.image}
        source={{ uri: 'https://mega98fm.com.br/portal/wp-content/uploads/2018/05/combustiveis.jpg' }} 
      />
      <TextInput
        style={styles.input}
        placeholder="Preço do Álcool"
        keyboardType="numeric"
        onChangeText={(text) => setAlcoholPrice(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Preço da Gasolina"
        keyboardType="numeric"
        onChangeText={(text) => setGasolinePrice(text)}
      />
      <TouchableOpacity style={styles.button} onPress={calculateAdvantage}>
        <Text style={styles.buttonText}>Verificar</Text>
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
  image: {
    width: 225,
    height: 150,
    borderRadius: 1,
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
