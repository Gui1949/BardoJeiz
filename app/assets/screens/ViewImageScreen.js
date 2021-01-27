import React, { useEffect, useState } from "react";
import {
  Image,
  RefreshControl,
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import axios from "axios";
import postScreen from "./postScreen";
import { Video } from "expo-av";
import { withNavigation } from "react-navigation";
import { color } from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";

let likeCounter = [];
let dislikeCounter = [];
let catchLikes = [];
let catchDislikes = [];

export default class ViewImageScreen extends React.Component {
  state = {
    persons: {
      data: [],
    },
    likes: {
      data: [],
    },
    refreshing: false,
  };

  _onRefresh() {
    this.setState({ refreshing: true });
    this.componentDidMount();
    this.setState({ refreshing: false });
  }

  async componentDidMount() {
    axios.get(`https://bardojeiz-server.herokuapp.com/data`).then((res) => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  likeColor(i) {
    this.componentDidMount();
    var str = "";
    str = i.replace(/[^0-9\.]+/g, "");

    if (catchDislikes.includes(str)) {
      var dislikeLabelColor_ = "#95a5a6";
      this.setState({ ["dislikeLabelColor_" + str]: dislikeLabelColor_ });
      dislikeCounter[str] = undefined;

      fetch("https://bardojeiz-server.herokuapp.com/data/del_dislike", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ID: str,
        }),
      });
    }

    if (likeCounter[str] == undefined) {
      catchLikes.push(str);
      var likeLabelColor_ = "#ff79c6";
      this.setState({ ["likeLabelColor_" + str]: likeLabelColor_ });
      likeCounter[str] = 0;

      fetch("https://bardojeiz-server.herokuapp.com/data/like", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ID: str,
        }),
      });
    } else {
      if (likeCounter[str] == 0) {
        for (var i = 0; i < catchLikes.length; i++) {
          if (catchLikes[i] === str) {
            catchLikes.splice(i, 1);
            console.log(JSON.stringify(catchLikes));
          }
        }

        var likeLabelColor_ = "#95a5a6";
        this.setState({ ["likeLabelColor_" + str]: likeLabelColor_ });
        likeCounter[str] = undefined;

        fetch("https://bardojeiz-server.herokuapp.com/data/del_like", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ID: str,
          }),
        });
      }
    }
  }

  dislikeColor(i) {
    this.componentDidMount();
    var str = "";
    str = i.replace(/[^0-9\.]+/g, "");
    catchDislikes.push(str);

    if (catchLikes.includes(str)) {
      var likeLabelColor_ = "#95a5a6";
      this.setState({ ["likeLabelColor_" + str]: likeLabelColor_ });
      likeCounter[str] = undefined;

      fetch("https://bardojeiz-server.herokuapp.com/data/del_like", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ID: str,
        }),
      });
    }

    if (dislikeCounter[str] == undefined) {
      var dislikeLabelColor_ = "#ff79c6";
      this.setState({ ["dislikeLabelColor_" + str]: dislikeLabelColor_ });
      dislikeCounter[str] = 0;

      fetch("https://bardojeiz-server.herokuapp.com/data/dislike", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ID: str,
        }),
      });
    } else {
      for (var i = 0; i < catchDislikes.length; i++) {
        if (catchDislikes[i] === str) {
          catchDislikes.splice(i, 1);
        }
      }
      var dislikeLabelColor_ = "#95a5a6";
      this.setState({ ["dislikeLabelColor_" + str]: dislikeLabelColor_ });
      dislikeCounter[str] = undefined;
      fetch("https://bardojeiz-server.herokuapp.com/data/del_dislike", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ID: str,
        }),
      });
    }
  }

  render() {
    let claudinho_sensacao = this.state.persons.data[0];
    if (claudinho_sensacao == undefined) {
      return (
        <View style={[StyleSheet.absoluteFill, styles.maybeRenderUploading]}>
          <ActivityIndicator color="#fff" size="large" />
          <StatusBar barStyle="light-content" />
        </View>
      );
    } else {
      let antenor_albuquerque = this.state.persons.data;
      let i = -1;
      let conteudo;
      return (
        <>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => this.props.navigation.navigate("post")}
            style={styles.postButton}
          >
            <FontAwesomeIcon
              icon={["fas", "upload"]}
              style={styles.FloatingButtonStyle}
            />
          </TouchableOpacity>
          <ScrollView
            backgroundColor="#282a36"
            removeClippedSubviews
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh.bind(this)}
              />
            }
          >
            <View style={styles.ViewimgFixed} key={i}>
              <View style={styles.header}>
                <Image source={require("../eu.png")} style={styles.avatar} />

                <View>
                  <Text style={styles.avatarName}>
                    Desenvolvedor{" "}
                    <FontAwesomeIcon
                      icon={["fas", "thumbtack"]}
                      style={styles.avatarNameIcon}
                      size={10}
                    />
                  </Text>
                  <Text style={styles.avatarDescription}>
                    26/01/2020 - 16:06
                  </Text>
                </View>
              </View>
              <View style={styles.img_field}>
                <Video
                  source={require("../fixo.mp4")}
                  style={styles.img_fixed}
                  resizeMode="cover"
                  useNativeControls
                  isLooping
                  default
                />
              </View>
              <View style={styles.descriptionFixed}>
                <Text numberOfLines={6} style={styles.imageDescriptionFixed}>
                  Opa, salve! Você está no Bar do Jeiz, o Instagram se fosse
                  bom! Em desenvolvimento desde Abril/2020, o Bar do Jeiz nada
                  mais é do que um beta gigante, um monstro indomável... Nem eu
                  sei aonde vai parar essa budega, mas enfim, por enquanto os
                  posts duram por tempo limitado, então, aproveite enquanto é
                  tempo...
                </Text>
              </View>
            </View>

            {antenor_albuquerque.map((antenor_albuquerque) => (
              <View style={styles.Viewimg} key={i}>
                {(() => {
                  i++;
                  window["Object" + parseInt(i)] = new Object();
                  window["Object" + parseInt(i)] = Object.values(
                    this.state.persons.data[parseInt(i)]
                  );
                  if (window["Object" + i][4].includes(".mp4", "mov") == true) {
                    conteudo = (
                      <Video
                        source={{ uri: window["Object" + i][4] }}
                        style={styles.img}
                        resizeMode="contain"
                        useNativeControls
                        isLooping
                        default
                      />
                    );
                  } else {
                    conteudo = (
                      <Image
                        source={{ uri: window["Object" + i][4] }}
                        style={styles.img}
                        resizeMode="contain"
                      />
                    );
                  }
                })()}
                <View style={styles.header}>
                  <Image
                    key={window["Object" + i][1]}
                    source={{
                      uri: "https://www.tnmc.go.tz/images/2020/avatar.jpg",
                    }}
                    style={styles.avatar}
                  />

                  <View>
                    <Text style={styles.avatarName}>
                      {window["Object" + i][1]}
                    </Text>
                    <Text style={styles.avatarDescription}>
                      {window["Object" + i][3]}
                    </Text>
                  </View>
                </View>
                <View style={styles.img_field}>{conteudo}</View>
                <View style={styles.description}>
                  <Text numberOfLines={1} style={styles.imageDescription}>
                    {window["Object" + i][5]}
                  </Text>
                </View>
                <View style={styles.buttons}>
                  <TouchableOpacity
                    id={"buttonLike_" + window["Object" + i][0]}
                    key={i}
                    style={{
                      width: "50%",
                      height: 46,
                      borderTopWidth: 1.5,
                      flexDirection: "row",
                      borderColor: "#bd93f9",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: 13,
                    }}
                    onPress={() =>
                      this.likeColor(
                        JSON.stringify(antenor_albuquerque, ["ID"])
                      )
                    }
                  >
                    <FontAwesomeIcon
                      style={{
                        color:
                          this.state[
                            "likeLabelColor_" + window["Object" + i][0]
                          ] == undefined
                            ? "#95a5a6"
                            : this.state[
                                "likeLabelColor_" + window["Object" + i][0]
                              ],
                        fontSize: 16,
                        opacity: 0.88,
                      }}
                      icon={["far", "thumbs-up"]}
                    />
                    <Text
                      style={{
                        paddingLeft: 5,
                        fontSize: 17,
                        opacity: 0.88,
                        color:
                          this.state[
                            "likeLabelColor_" + window["Object" + i][0]
                          ] == undefined
                            ? "#95a5a6"
                            : this.state[
                                "likeLabelColor_" + window["Object" + i][0]
                              ],
                      }}
                    >
                      {window["Object" + i][6]}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    id={"buttonDislike_" + window["Object" + i][0]}
                    style={{
                      width: "50%",
                      height: 46,
                      borderTopWidth: 1.5,
                      flexDirection: "row",
                      borderColor: "#bd93f9",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: 13,
                    }}
                    onPress={() =>
                      this.dislikeColor(
                        JSON.stringify(antenor_albuquerque, ["ID"])
                      )
                    }
                  >
                    <FontAwesomeIcon
                      style={{
                        color:
                          this.state[
                            "dislikeLabelColor_" + window["Object" + i][0]
                          ] == undefined
                            ? "#95a5a6"
                            : this.state[
                                "dislikeLabelColor_" + window["Object" + i][0]
                              ],
                        opacity: 0.88,
                        fontSize: 16,
                      }}
                      icon={["far", "thumbs-down"]}
                    />
                    <Text
                      style={{
                        paddingLeft: 5,
                        opacity: 0.88,
                        fontSize: 17,
                        color:
                          this.state[
                            "dislikeLabelColor_" + window["Object" + i][0]
                          ] == undefined
                            ? "#95a5a6"
                            : this.state[
                                "dislikeLabelColor_" + window["Object" + i][0]
                              ],
                      }}
                    >
                      {window["Object" + i][7]}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
        </>
      );
    }
  }
}

const styles = StyleSheet.create({
  postButton: {
    position: "absolute",
    width: 57,
    height: 57,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 30,
    zIndex: 1,
    backgroundColor: "#3498db",
    borderRadius: 50,
    borderColor: "#2980b9",
    borderWidth: 2,
  },

  FloatingButtonStyle: {
    resizeMode: "contain",
    width: 70,
    height: 70,
    color: "#ffffff",
    fontSize: 18,
  },

  img: {
    width: "100%",
    alignSelf: "center",
    height: 300,
  },

  img_fixed: {
    width: "100%",
    borderRadius: 8,
    alignSelf: "center",
    height: 300,
  },

  img_field: {
    borderRadius: 8,
    alignSelf: "center",
    width: "91%",
    backgroundColor: "#282a36",
  },

  descriptionFixed: {
    paddingLeft: 10,
    paddingTop: 10,
    paddingRight: 10,
    width: "97%",
    alignSelf: "center",
  },

  description: {
    paddingLeft: 10,
    paddingTop: 10,
    width: "97%",
    alignSelf: "center",
    paddingRight: 10,
  },

  imageDescription: {
    color: "#ffffff",
    fontSize: 13,
    height: 18,
  },

  imageDescriptionFixed: {
    color: "#ffffff",
    fontSize: 13,
    height: 108,
  },

  header: {
    width: "100%",
    paddingLeft: 10,
    paddingTop: 9,
    paddingBottom: 46,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: "row",
    color: "#ffffff",
    height: 50,
  },

  ViewimgFixed: {
    width: "95%",
    alignSelf: "center",
    height: 470,
    backgroundColor: "#44475a",
    borderRadius: 8,
    paddingTop: 0,
    borderBottomWidth: 0.8,
    marginBottom: 15,
    marginTop: 10,
    flexDirection: "column",
    flex: 1,
  },

  Viewimg: {
    width: "95%",
    height: 450,
    alignSelf: "center",
    paddingTop: 0,
    backgroundColor: "#44475a",
    borderRadius: 8,
    borderBottomWidth: 0.8,
    marginBottom: 15,
    flexDirection: "column",
    flex: 1,
    color: "#ffffff",
  },

  avatarName: {
    fontWeight: "bold",
    color: "#ffffff",
    paddingLeft: 7,
    paddingTop: Platform.OS === "android" ? 1 : 3,
  },

  avatarNameIcon: {
    paddingLeft: 10,
    color: "#ffffff",
    paddingTop: Platform.OS === "android" ? 1 : 3,
  },

  avatarDescription: {
    paddingLeft: 7,
    color: "#ffffff",
    paddingTop: Platform.OS === "android" ? 0 : 2,
    fontSize: 12,
  },

  avatar: {
    width: 40,
    borderRadius: 60 / 2,
    marginLeft: 8,
    height: 40,
  },

  buttons: {
    flex: 1,
    flexDirection: "row",
    width: "97%",
    alignSelf: "center",
    color: "#ffffff",
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: 70,
    justifyContent: "space-between",
  },

  buttonZap: {
    color: "#ffffff",
    width: "48.5%",
    height: 50,
    flexDirection: "row",
  },

  maybeRenderUploading: {
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
  },

  buttonDefault: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 13,
  },

  buttonZapText: {
    paddingLeft: 5,
    fontSize: 17,
    color: "#e74c3c",
  },

  ButtonZapIcon: {
    color: "#e74c3c",
    fontSize: 18,
  },
});
