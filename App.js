import React from "react";
import { Button, View, Text, Image } from "react-native";
import WelcomeScreen from "./app/assets/screens/WelcomeScreen";
import ViewImageScreen from "./app/assets/screens/ViewImageScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import postScreen from "./app/assets/screens/postScreen";

library.add(fab, faPlus, far);

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="welcome"
          options={{ title: "Bem Vindo(a)!" }}
          component={WelcomeScreen}
        />
        <Stack.Screen
          name="home"
          options={{
            title: "Bar do Jeiz",
          }}
          component={ViewImageScreen}
        />
        <Stack.Screen
          name="post"
          options={{
            title: "Postar",
          }}
          component={postScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
