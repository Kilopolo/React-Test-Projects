import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './WelcomeScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        {/* Agrega aquí las rutas para otras pantallas, como SIMULADOR DE CRÉDITO, TEORÍA A APLICAR, etc. */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
