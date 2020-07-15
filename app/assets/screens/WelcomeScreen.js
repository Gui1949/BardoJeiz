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

const WelcomeScreen = ({ navigation }) => {
  const [text, setText] = useState("");
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
        </View>

        <TextInput
          placeholder="Username"
          id="txt_username"
          style={styles.username_text}
          onChangeText={(text) => setText(text)}
        ></TextInput>
      </KeyboardAvoidingView>

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => {
          if (text == "") {
            Alert.alert("Erro", "Insira um username");
          } else {
            navigation.navigate("home");
            AsyncStorage.setItem("username", text);
          }
        }}
      >
        <Text style={styles.txt_login}> Bora</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

// function WelcomeScreen({ navigation }) {}

const styles = StyleSheet.create({
  txt_login: {
    color: "#fff",
    alignSelf: "center",
    fontSize: 16,
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
