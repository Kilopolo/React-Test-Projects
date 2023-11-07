import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setIMC] = useState(null);
  const [mensaje, setMensaje] = useState('');

  const calcularIMC = () => {
    if (altura && peso) {
      const alturaMetros = altura / 100;
      const imcCalculado = (peso / (alturaMetros * alturaMetros)).toFixed(2);
      setIMC(imcCalculado);

      if (imcCalculado < 18.5) {
        setMensaje('Delgado');
      } else if (imcCalculado >= 18.5 && imcCalculado <= 24.9) {
        setMensaje('Normal');
      } else {
        setMensaje('Gordo');
      }
    } else {
      setIMC(null);
      setMensaje('');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Calculadora de Masa Corporal (IMC)</Text>
      <TextInput
        style={styles.input}
        placeholder="Altura (cm)"
        onChangeText={(text) => setAltura(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        onChangeText={(text) => setPeso(text)}
        keyboardType="numeric"
      />
      <Button title="Calcular IMC" onPress={calcularIMC} />
      {imc !== null && (
        <View>
          <Text>Tu IMC: {imc}</Text>
          <Text>Estado: {mensaje}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    margin: 10,
    paddingLeft: 10,
  },
});

export default App;
