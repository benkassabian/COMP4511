import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";

import styles from "./src/styles/global";
import theme from "./src/styles/theme";
import background from "./assets/background.png";

import LandingPage from "./src/pages/LandingPage";
import LoginPage from "./src/pages/LoginPage";
import SignUpPage from "./src/pages/SignUpPage";
import Home from "./src/pages/Home";
import Profile from "./src/pages/Profile";
import Quiz from "./src/pages/Quiz";
import JumpingGame from "./src/pages/JumpingGame";
import Calculator from "./src/pages/Calculator";
import TipsPage from "./src/pages/TipsPage";
import MetricsPage from "./src/pages/MetricsPage";
import NavBar from "./src/components/NavBar";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="SignUpPage" component={SignUpPage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Calculator" component={Calculator} />
        <Stack.Screen name="JumpingGame" component={JumpingGame} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="Tips" component={TipsPage} />
        <Stack.Screen name="Metrics" component={MetricsPage} />
      </Stack.Navigator>
      <NavBar/>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <MyStack />
    </NativeBaseProvider>
  );
}
