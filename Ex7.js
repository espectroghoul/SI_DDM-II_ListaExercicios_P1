import React, { useState } from 'react';
import { View, Text, TextInput, Picker, Switch, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('Masculino');
  const [escolaridade, setEscolaridade] = useState('Ensino Médio');
  const [limiteConta, setLimiteConta] = useState('5000'); // Agora como string
  const [brasileiro, setBrasileiro] = useState(false);
  const [dadosConfirmados, setDadosConfirmados] = useState(false);

  const confirmarDados = () => {
    setDadosConfirmados(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Abertura de Conta</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Idade"
        value={idade}
        keyboardType="numeric"
        onChangeText={(text) => setIdade(text)}
      />

      <Picker
        style={styles.input}
        selectedValue={sexo}
        onValueChange={(itemValue) => setSexo(itemValue)}
      >
        <Picker.Item label="Gênero" value="Gênero" />
        <Picker.Item label="Masculino" value="Masculino" />
        <Picker.Item label="Feminino" value="Feminino" />
        <Picker.Item label="Não Binario" value="Não Binario" />
      </Picker>

      <Picker
        style={styles.input}
        selectedValue={escolaridade}
        onValueChange={(itemValue) => setEscolaridade(itemValue)}
      >
        <Picker.Item label="Escolaridade" value="Escolaridade" />
        <Picker.Item label="Ensino Médio Incompleto" value="Ensino Médio" />
        <Picker.Item label="Cursando Ensino Médio" value="Ensino Médio" />
        <Picker.Item label="Ensino Médio Completo" value="Ensino Médio" />
        <Picker.Item label="Ensino Superior Incompleto" value="Graduação" />
        <Picker.Item label="Cursando Ensino Superior" value="Graduação" />
        <Picker.Item label="Ensino Superior Completo" value="Graduação" />
        <Picker.Item label="Pós-Graduação Incompleta" value="Pós-Graduação" />
        <Picker.Item label="Cursando Pós-Graduação" value="Pós-Graduação" />
        <Picker.Item label="Pós-Graduação Completa" value="Pós-Graduação" />
      </Picker>

      <TextInput
        style={styles.input}
        placeholder="Limite na Conta"
        value={limiteConta}
        keyboardType="numeric"
        onChangeText={(text) => setLimiteConta(text)}
      />

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Brasileiro</Text>
        <Switch
          value={brasileiro}
          onValueChange={(value) => setBrasileiro(value)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={confirmarDados}>
        <Text style={styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>

      {dadosConfirmados && (
        <View style={styles.confirmationContainer}>
          <Text style={styles.confirmationText}>Dados Confirmados:</Text>
          <Text>Nome: {nome}</Text>
          <Text>Idade: {idade}</Text>
          <Text>Sexo: {sexo}</Text>
          <Text>Escolaridade: {escolaridade}</Text>
          <Text>Limite na Conta: R$ {parseFloat(limiteConta).toFixed(2)}</Text>
          <Text>Brasileiro: {brasileiro ? 'Sim' : 'Não'}</Text>
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
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  label: {
    marginRight: 8,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  confirmationContainer: {
    marginTop: 16,
  },
  confirmationText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
