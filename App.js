import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import WelcomeScreen from "./app/assets/screens/WelcomeScreen";
import ViewImageScreen from "./app/assets/screens/ViewImageScreen";
import ViewVideoScreen from "./app/assets/screens/ViewVideoScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import postScreen from "./app/assets/screens/postScreen";
import { TouchableOpacity } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";
library.add(fab, fas, far);

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    const MickJagger = this.props.navigation;
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="welcome"
            options={{ title: "Bem Vindo(a)!", headerTitleAlign: "center" }}
            component={WelcomeScreen}
          />
          <Stack.Screen
            name="home_video"
            options={({ navigation, route }) => ({
              title: "Bar do Jeiz",
              headerTitleAlign: "center",
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("home");
                  }}
                  style={styles.postButton}
                >
                  <FontAwesomeIcon
                    icon={["far", "image"]}
                    style={styles.FloatingButtonStyle}
                  />
                </TouchableOpacity>
              ),
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => navigation.navigate("welcome")}
                  style={styles.postButton}
                >
                  <FontAwesomeIcon
                    icon={["fas", "arrow-left"]}
                    style={styles.FloatingButtonStyle}
                  />
                </TouchableOpacity>
              ),            
            })}
            component={ViewVideoScreen}
          />          
          <Stack.Screen
            name="home"
            component={ViewImageScreen}
            options={({ navigation, route }) => ({
              title: "Bar do Jeiz",
              headerTitleAlign: "center",
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("home_video");
                  }}
                  style={styles.postButton}
                >
                  <FontAwesomeIcon
                    icon={["fas", "video"]}
                    style={styles.FloatingButtonStyle}
                  />
                </TouchableOpacity>
              ),
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={styles.postButton}
                >
                  <FontAwesomeIcon
                    icon={["fas", "arrow-left"]}
                    style={styles.FloatingButtonStyle}
                  />
                </TouchableOpacity>
              ),            
            })}
          />
          <Stack.Screen
            name="post"
            options={({ navigation, route }) => ({
              title: "Postar",
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={styles.postButton}
                >
                  <FontAwesomeIcon
                    icon={["fas", "arrow-left"]}
                    style={styles.FloatingButtonStyle}
                  />
                </TouchableOpacity>
              ),                   
            })}
            component={postScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  postButton: {
    width: 57,
    height: 57,
    alignItems: "center",
    justifyContent: "center",
  },

  FloatingButtonStyle: {
    color: "#212121",
  },
});
