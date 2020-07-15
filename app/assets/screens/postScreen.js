import React, { Component } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Button,
  Alert,
  Clipboard,
  Image,
  TextInput,
  Share,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import { Constants } from "expo";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { AsyncStorage } from "react-native";

export default class postScreen extends Component {
  state = {
    image: null,
    uploading: false,
  };

  render() {
    let { image } = this.state;

    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <StatusBar barStyle="default" />

        <Text style={styles.exampleText}>
          Você quer mesmo postar uma foto no Bar do Jeiz?
        </Text>

        <Button onPress={this._pickImage} title="Pegar uma imagem da galeria" />

        <Button onPress={this._takePhoto} title="Tirar uma foto agora" />

        <TextInput
          ref={(el) => {
            this.description_text = el;
          }}
          placeholder="Descrição"
          id="txt_desc"
          style={styles.description_text}
          onChangeText={(description_text) => {
            this.setState({ description_text });
          }}
        ></TextInput>
        {this._maybeRenderImage()}
        {this._maybeRenderUploadingOverlay()}
      </KeyboardAvoidingView>
    );
  }

  _maybeRenderUploadingOverlay = () => {
    if (this.state.uploading) {
      //   return (
      //     <View style={[StyleSheet.absoluteFill, styles.maybeRenderUploading]}>
      //       <ActivityIndicator color="#fff" size="large" />
      //     </View>
      //   );
    }
  };

  _maybeRenderImage = () => {};

  _share = () => {
    Share.share({
      message: this.state.image,
      title: "Check out this photo",
      url: this.state.image,
    });
  };

  _copyToClipboard = () => {
    Clipboard.setString(this.state.image);
    alert("Copied image URL to clipboard");
  };

  _takePhoto = async () => {
    const { status: cameraPerm } = await Permissions.askAsync(
      Permissions.CAMERA
    );

    const { status: cameraRollPerm } = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );

    // only if user allows permission to camera AND camera roll
    if (cameraPerm === "granted" && cameraRollPerm === "granted") {
      let pickerResult = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });

      this._handleImagePicked(pickerResult);
    }
  };

  _pickImage = async () => {
    const { status: cameraRollPerm } = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );

    if (cameraRollPerm === "granted") {
      let pickerResult = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });

      this._handleImagePicked(pickerResult);
    }
  };

  _handleImagePicked = async (pickerResult) => {
    let uploadResponse, uploadResult;

    try {
      this.setState({
        uploading: true,
      });

      if (!pickerResult.cancelled) {
        uploadResponse = await uploadImageAsync(
          pickerResult.uri,
          this.state.description_text
        );
        uploadResult = await uploadResponse.json();

        this.setState({
          image: uploadResult.location,
        });
      }
    } catch (e) {
      console.log({ uploadResponse });
      console.log({ uploadResult });
      console.log({ e });
      // alert("Upload failed, sorry :(");
    } finally {
      this.setState({
        uploading: false,
      });
    }
  };
}

async function uploadImageAsync(uri, joao_carlos) {
  if (joao_carlos == undefined) {
    Alert.alert("Erro", "Insira uma descrição");
  } else {
    let apiUrl = "http://34.95.243.9:80/data/upload";
    let uriParts = uri.split(".");
    let fileType = uriParts[uriParts.length - 1];
    let formData = new FormData();
    formData.append("photo", {
      uri,
      name: `photo.${fileType}`,
      type: `image/${fileType}`,
    });

    formData.append("description", joao_carlos);

    const value = await AsyncStorage.getItem("username");
    formData.append("username", value);
    console.log(value);

    let options = {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    };
    Alert.alert("Show!", "A imagem foi enviada");
    return fetch(apiUrl, options);
  }
}

const styles = StyleSheet.create({
  description_text: {
    width: "80%",
    marginTop: 10,
    paddingLeft: 10,
    height: 46,
    borderWidth: 1.5,
    flexDirection: "row",
    borderColor: "#7f8c8d",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 13,
  },

  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  exampleText: {
    fontSize: 20,
    marginBottom: 20,
    marginHorizontal: 15,
    textAlign: "center",
  },
  maybeRenderUploading: {
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
  },
  maybeRenderContainer: {
    borderRadius: 3,
    elevation: 2,
    marginTop: 30,
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 4,
      width: 4,
    },
    shadowRadius: 5,
    width: 250,
  },
  maybeRenderImageContainer: {
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    overflow: "hidden",
  },
  maybeRenderImage: {
    height: 250,
    width: 250,
  },
  maybeRenderImageText: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
