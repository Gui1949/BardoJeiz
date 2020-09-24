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
<<<<<<< HEAD
import { Image as RneImage } from "react-native-elements";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import axios from "axios";
import postScreen from "./postScreen";
=======
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import axios from "axios";
import postScreen from "./postScreen";
import { Video } from "expo-av";
import { withNavigation } from 'react-navigation';
>>>>>>> f00ad932d46fb32e04fd151f9af0234293c6d200

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
    axios.get(`http://34.95.243.9:80/data/img_file`).then((res) => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  likeColor(i) {
    this.componentDidMount();
    var str = "";
    str = i.replace(/[^0-9\.]+/g, "");

    if (catchDislikes.includes(str)){
      var dislikeLabelColor_ = "#000000";
      this.setState({ ["dislikeLabelColor_" + str]: dislikeLabelColor_ });
      dislikeCounter[str] = undefined;

      fetch("http://34.95.243.9:80/data/del_dislike", {
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
      var likeLabelColor_ = "#2980b9";
      this.setState({ ["likeLabelColor_" + str]: likeLabelColor_ });
      likeCounter[str] = 0;

      fetch("http://34.95.243.9:80/data/like", {
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

        var likeLabelColor_ = "#000000";
        this.setState({ ["likeLabelColor_" + str]: likeLabelColor_ });
        likeCounter[str] = undefined;

        fetch("http://34.95.243.9:80/data/del_like", {
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
    
    if (catchLikes.includes(str)){
      var likeLabelColor_ = "#000000";
      this.setState({ ["likeLabelColor_" + str]: likeLabelColor_ });
      likeCounter[str] = undefined;

      fetch("http://34.95.243.9:80/data/del_like", {
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
      var dislikeLabelColor_ = "#c0392b";
      this.setState({ ["dislikeLabelColor_" + str]: dislikeLabelColor_ });
      dislikeCounter[str] = 0;
            
      fetch("http://34.95.243.9:80/data/dislike", {
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
      var dislikeLabelColor_ = "#000000";
      this.setState({ ["dislikeLabelColor_" + str]: dislikeLabelColor_ });
      dislikeCounter[str] = undefined;
      fetch("http://34.95.243.9:80/data/del_dislike", {
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
        </View>
      );
    } else {
      let antenor_albuquerque = this.state.persons.data;
      let i = -1;
      return (
        <>     
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => this.props.navigation.navigate("post")}
            style={styles.postButton}
          >
            <FontAwesomeIcon
              icon={["far", "image"]}
              style={styles.FloatingButtonStyle}
            />
          </TouchableOpacity>
          <ScrollView
            removeClippedSubviews
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh.bind(this)}
              />
            }
          >
            {antenor_albuquerque.map((antenor_albuquerque) => (
              <View style={styles.Viewimg} key={i}>
                {(() => {
                  i++;
                  window["Object" + parseInt(i)] = new Object();
                  window["Object" + parseInt(i)] = Object.values(
                    this.state.persons.data[parseInt(i)]
                  );
                })()}
                <View style={styles.header}>
                  <Image
                    key={window["Object" + i][1]}
                    source={{
                      uri: window["Object" + i][2],
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
                <Image
                  source={{ uri: window["Object" + i][4] }}
                  style={styles.img}
                />
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
                      borderColor: "#7f8c8d",
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
                        color: this.state[
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
                        color: this.state[
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
                      borderColor: "#7f8c8d",
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
                        color: this.state[
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
                        color: this.state[
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
    height: 300,
  },

  description: {
    paddingLeft: 10,
    paddingTop: 10,
    backgroundColor: "#fff",
    paddingRight: 10,
  },

  imageDescription: {
    fontSize: 13,
    height: 18,
  },

  header: {
    width: "100%",
    paddingLeft: 10,
    paddingTop: 5,
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    height: 50,
  },

  Viewimg: {
    width: "100%",
    height: 450,
    paddingTop: 0,
    borderBottomWidth: 0.8,
    borderColor: "#f0f0f0",
    flexDirection: "column",
    flex: 1,
  },

  avatarName: {
    fontWeight: "bold",
    paddingLeft: 7,
    paddingTop: Platform.OS === "android" ? 1 : 3,
  },

  avatarDescription: {
    paddingLeft: 7,
    paddingTop: Platform.OS === "android" ? 0 : 2,
    fontSize: 12,
  },

  avatar: {
    width: 40,
    borderRadius: 60 / 2,
    height: 40,
  },

  buttons: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    color: "#ffffff",
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 1.2,
    backgroundColor: "#ffffff",
    borderColor: "#ebebeb",
    height: 70,
    justifyContent: "space-between",
  },

  buttonZap: {
    borderRadius: 12,
    color: "#ffffff",
    width: "48.5%",
    height: 50,
    borderWidth: 2,
    flexDirection: "row",
    borderColor: "#e74c3c",
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
