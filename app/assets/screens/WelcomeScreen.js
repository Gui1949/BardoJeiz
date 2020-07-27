import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  TextInput,
  View,
  Platform,
  Image,
  Alert,
  KeyboardAvoidingView,
  TouchableHighlight,
  Text,
  Button,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import logo from "../bar.png";
import { AsyncStorage } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRef, useEffect } from "react";
let name = "";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var name1 = [
  "Zé",
  "Jão",
  "Marcin",
  "Chico",
  "Tonho",
  "Tião",
  "Juruna",
  "Carlinho",
  "Jefso",
  "Pedrin",
  "Marco",
  "Serjo",
  "Adilson",
  "Cleito",
  "Cabeça de",
  "Marquinho",
  "Jeremias",
  "Ailto",
  "Cesinho",
  "Beto",
  "Jurandir",
  "Doglinha",
];

var name2 = [
  "Bostola",
  "Carniça",
  "Fiofó",
  "Mortandela",
  "Tribufu",
  "Bilau",
  "da Pindaíba",
  "Boca Quente",
  "Boca de Ventosa",
  "Boca de Maçarico",
  "Corno Manso",
  "Urucubaca",
  "Psicopata",
  "Estrupicio",
  "Pereba",
  "do Furunculo",
  "Chulapa",
  "Buzanfa",
  "do Capiroto",
  "Pingola",
  "Banheiro de Rodoviaria",
  "Trabuco",
];

function generate_nick() {
  name =
    name1[getRandomInt(0, name1.length)] +
    " " +
    name2[getRandomInt(0, name2.length)];
}

const WelcomeScreen = ({ navigation }) => {
  const [text, setText] = useState("");
  const todoInput = useRef();

  return (
    <ImageBackground
      style={styles.background}
      source={{
        uri: "https://i.picsum.photos/id/432/1000/3000.jpg",
      }}
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <View style={styles.logoView}>
          <Image source={logo} style={styles.logo} />

          <Text style={styles.title}>Fica logo ali!</Text>
          <TouchableOpacity
            onPress={() => {
              generate_nick();
              setText(name);
            }}
            style={styles.generate_nick}
          >
            <Text style={styles.generate_nick_txt}>Gerar Nick</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          defaultValue={text}
          ref={todoInput}
          onTouchStart={() => setText("")}
          onChangeText={(text) => setText(text)}
          placeholder="Username"
          id="txt_username"
          style={styles.username_text}
        ></TextInput>
      </KeyboardAvoidingView>

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => {
          todoInput.current = text;
          if (todoInput.current == "") {
            Alert.alert("Erro", "Insira um username");
          } else {
            navigation.navigate("home");
            AsyncStorage.setItem("username", text);
            console.log(text);
          }
        }}
      >
        <Text style={styles.txt_login}> Bora</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  txt_login: {
    color: "#fff",
    alignSelf: "center",
    fontSize: 16,
  },

  generate_nick_txt: {
    color: "#3498db",
  },

  username_text: {
    width: "80%",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 100,
    paddingLeft: 10,
    height: 46,
    borderWidth: 1.5,
    flexDirection: "row",
    borderColor: "#7f8c8d",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 13,
  },

  generate_nick: {
    alignSelf: "center",
    top: 0,
    flexShrink: 1,
    position: "relative",
    height: 46,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 13,
  },

  background: {
    flex: 1,
    justifyContent: "flex-end",
  },

  navButton: {
    backgroundColor: "#3498db",
    width: "100%",
    justifyContent: "center",
    height: 50,
  },

  logoView: {
    height: 140,
    width: 140,
    alignSelf: "center",
    alignItems: "center",
    top: -120,
    flexShrink: 1,
  },

  logo: {
    width: 200,
    height: 200,
  },

  title: {
    color: "grey",
    fontSize: 20,
    marginTop: 5,
  },
});

export default WelcomeScreen;
