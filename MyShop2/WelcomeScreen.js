import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, Slider } from 'react-native';

const WelcomeScreen = () => {
  const [montoTotal, setMontoTotal] = useState(0);
  const [plazo, setPlazo] = useState(0);

  const calcularCuota = () => {
    const interes = (montoTotal * 0.9798);
    const totalDevolver = montoTotal + interes;
    const cuotaFija = totalDevolver / plazo;

    console.log(`TOTAL A DEVOLVER EN CUOTAS: ${totalDevolver}`);
    console.log(`CUOTA FIJA EN ${plazo} PAGOS: ${cuotaFija}`);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('./assets/fondo.jpg')} style={{ width: '100%', height: '100%', position: 'absolute' }} />
      <Text>Obtené Crédito</Text>
      <TextInput
        placeholder="Monto Total"
        value={montoTotal.toString()}
        onChangeText={(text) => setMontoTotal(Number(text))}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Plazo"
        value={plazo.toString()}
        onChangeText={(text) => setPlazo(Number(text))}
        keyboardType="numeric"
      />
      <Slider
        minimumValue={0}
        maximumValue={100000}
        step={1}
        value={montoTotal}
        onValueChange={(value) => setMontoTotal(value)}
      />
      <Slider
        minimumValue={0}
        maximumValue={60}
        step={1}
        value={plazo}
        onValueChange={(value) => setPlazo(value)}
      />
      <Button title="Ver detalle de cuotas" onPress={calcularCuota} />
    </View>
  );
};

export default WelcomeScreen;
