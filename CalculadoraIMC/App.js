import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native";
import { Svg, Path, SvgXml, Circle, G, Rect } from "react-native-svg";
import LottieView from "lottie-react-native";

const App = () => {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [imc, setIMC] = useState(null);
  const [mensaje, setMensaje] = useState("");
  const [mostrarFelicitacion, setMostrarFelicitacion] = useState("");

  // Función para obtener la imagen de felicitación según el mensaje
  const obtenerImagenFelicitacion = (mensaje) => {
    let imagen = "";
    if (mensaje === "Delgado") {
      imagen = require("./felicitacion_delgado.png");
    } else if (mensaje === "Normal") {
      imagen = require("./felicitacion_normal.png");
    } else if (mensaje === "Gordo") {
      imagen = require("./felicitacion_gordo.png");
    } else if (mensaje === "Obeso") {
      imagen = require("./felicitacion_obeso.png");
    }
    return imagen;
  };

  const CloudButton = ({ onPress }) => {
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Svg width={100} height={60} viewBox="0 0 100 60">
          <Circle cx="30" cy="35" r="15" fill="#FFFFFF" />
          <Circle cx="45" cy="30" r="20" fill="#FFFFFF" />
          <Circle cx="65" cy="35" r="15" fill="#FFFFFF" />
          <Rect x="30" y="20" width="40" height="30" fill="#FFFFFF" />
        </Svg>
      </TouchableOpacity>
    );
  };

  const calcularIMC = () => {
    if (altura && peso) {
      const alturaMetros = altura / 100;
      const imcCalculado = (peso / (alturaMetros * alturaMetros)).toFixed(2);
      setIMC(imcCalculado);

      if (imcCalculado < 18.5) {
        setMensaje("Delgado");
        setMostrarFelicitacion("Delgado");
      } else if (imcCalculado >= 18.5 && imcCalculado <= 24.9) {
        setMensaje("Normal");
        setMostrarFelicitacion("Normal");
      } else if (imcCalculado >= 25 && imcCalculado <= 29.9) {
        setMensaje("Gordo");
        setMostrarFelicitacion("Gordo");
      } else {
        setMensaje("Obeso");
        setMostrarFelicitacion("Obeso");
      }
    } else {
      setIMC(null);
      setMensaje("");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground
        source={require("./BKG.jpg")}
        style={styles.backgroundImage}
      >
        <Text style={styles.titulo}>IMC CALCULATOR</Text>
        <Text style={styles.subtitulo}>Ligero como una nube</Text>
        <View style={styles.inputContainer}>
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
          {/* <Button title="Calcular IMC" onPress={calcularIMC} /> */}
          <CloudButton onPress={calcularIMC} />
        </View>
        {imc !== null && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>Tu IMC: {imc}</Text>
            <Text style={styles.resultText}>Estado: {mensaje}</Text>
          </View>
        )}
        <Image
          source={obtenerImagenFelicitacion(mostrarFelicitacion)}
          style={styles.image}
        />
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    backgroundColor: "rgba(30, 45, 55, 0.5)",
    borderRadius: 20,
    padding: 20,
    color: "white",
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    margin: 10,
    paddingLeft: 10,
    color: "white",
    marginBottom: 10,
    paddingLeft: 10,
    fontSize: 18,
  },
  resultContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: 20,
    borderRadius: 10,
    margin: 20,
  },
  resultText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    alignItems: "center",
  },
  felicitacionImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  titulo: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
});

export default App;
