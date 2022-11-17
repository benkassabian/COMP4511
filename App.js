import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { NativeBaseProvider } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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
import Settings from "./src/pages/Settings/Settings";
import AccountSettings from "./src/pages/Settings/Account";
import CalculatorSettings from "./src/pages/Settings/Calculator";
import { ViewBase } from "react-native";
import NavBar from "./src/components/NavigationPanel";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import GameHomeScreen from "./src/pages/GameHomeScreen";
import LogBookPage from "./src/pages/LogBookPage";
import ChallengesPage from "./src/pages/ChallengesPage";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomePage = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#8888D7",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Metrics"
        component={MetricsPage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="insert-chart-outlined"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LandingPage" component={LandingPage} />
          <Stack.Screen name="SignUpPage" component={SignUpPage} />
          <Stack.Screen name="LoginPage" component={LoginPage} />
          <Stack.Screen name="HomePage" component={HomePage} />
          <Tab.Screen name="Calculator" component={Calculator} />
          <Tab.Screen name="JumpingGame" component={JumpingGame} />
          <Tab.Screen name="Games" component={GameHomeScreen} />
          <Tab.Screen name="Quiz" component={Quiz} />
          <Tab.Screen name="Tips" component={TipsPage} />
          <Tab.Screen name="LogBook" component={LogBookPage} />
          <Tab.Screen name="Challenges" component={ChallengesPage} />
          <Tab.Screen name="AccountSettings" component={AccountSettings} />
          <Tab.Screen
            name="CalculatorSettings"
            component={CalculatorSettings}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
