import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeBaseProvider } from "native-base";

import theme from "./src/styles/theme";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

// startup stack
import Landing from "./src/pages/LandingPage";
import Login from "./src/pages/LoginPage";
import Register from "./src/pages/SignUpPage";

// home stack
import Home from "./src/pages/Home";
import Timer from "./src/pages/Timer";
import Logbook from "./src/pages/LogBookPage";
import Challenges from "./src/pages/ChallengesPage";
import Calculator from "./src/pages/Calculator";
import Tips from "./src/pages/TipsPage";
import GameHomeScreen from "./src/pages/GameHomeScreen";

// game stack
import JumpingGame from "./src/pages/JumpingGame";
import Quiz from "./src/pages/Quiz";

// settings stack
import Settings from "./src/pages/Settings/Settings";
import AccountSettings from "./src/pages/Settings/Account";
import CalculatorSettings from "./src/pages/Settings/Calculator";

// standalone
import Metrics from "./src/pages/MetricsPage";
import Profile from "./src/pages/Profile";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#F3EAFE",
  },
  headerTintColor: "black",
  headerBackTitle: "Back",
};

// games stack
const GamesStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Screen name="Games" component={GameHomeScreen} />
      <Stack.Screen name="Water-Tac-Toe" component={JumpingGame} />
      <Stack.Screen name="Knowledge Quiz" component={Quiz} />
    </Stack.Navigator>
  );
};

// home stack
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Shower Timer" component={Timer} />
      <Stack.Screen name="Logbook" component={Logbook} />
      <Stack.Screen name="Challenges" component={Challenges} />
      <Stack.Screen name="Calculator" component={Calculator} />
      <Stack.Screen name="Tips" component={Tips} />
      <Stack.Screen name="Games" component={GamesStackNavigator} />
    </Stack.Navigator>
  );
};

// settings stack
const SettingsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Account Settings" component={AccountSettings} />
      <Stack.Screen name="Calculator Settings" component={CalculatorSettings} />
    </Stack.Navigator>
  );
};

// metrics stack
const MetricsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Metrics" component={Metrics} />
    </Stack.Navigator>
  );
};

// profile stack
const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

// tabs
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home" 
      screenOptions={{ 
        tabBarActiveTintColor: "#8888D7", 
        // tabBarIcon: {size: 20}, 
        tabBarStyle: {height: 86, paddingTop: 6},
        tabBarLabelStyle: {fontSize: 16 },
        headerShown: false 
        }} >
      <Tab.Screen name="Home" component={HomeStackNavigator} options={{ tabBarIcon: ({ color, size }) => (<MaterialIcons name="home" color={color} size={size} />) }}/>
      <Tab.Screen name="Metrics" component={MetricsStackNavigator} options={{ tabBarIcon: ({ color, size }) => (<MaterialIcons name="insert-chart-outlined" color={color} size={size} />) }}/>
      <Tab.Screen name="Profile" component={ProfileStackNavigator} options={{ tabBarIcon: ({ color, size }) => (<MaterialIcons name="person-outline" color={color} size={size} />) }}/>
      <Tab.Screen name="Settings" component={SettingsStackNavigator} options={{ tabBarIcon: ({ color, size }) => (<MaterialIcons name="settings" color={color} size={size} />) }}/>
    </Tab.Navigator>
  );
};

// const HomePage = () => {
//   return (
//     <Tab.Navigator initialRouteName="Home" screenOptions={{ tabBarActiveTintColor: "#8888D7", headerShown: true }}>
//       <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: ({ color, size }) => (<MaterialIcons name="home" color={color} size={size} />) }}/>
//       <Tab.Screen name="Metrics" component={MetricsPage} options={{ tabBarIcon: ({ color, size }) => (<MaterialIcons name="insert-chart-outlined" color={color} size={size} />) }}/>
//       <Tab.Screen name="Profile" component={Profile} options={{ tabBarIcon: ({ color, size }) => (<MaterialIcons name="person-outline" color={color} size={size} />) }}/>
//       <Tab.Screen name="Settings" component={Settings} options={{ tabBarIcon: ({ color, size }) => (<MaterialIcons name="settings" color={color} size={size} />) }}/>
//     </Tab.Navigator>
//   );
// };

// startup
const StartStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Landing" >
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NativeBaseProvider theme={theme} >
      <NavigationContainer>
        <StartStackNavigator />
      </NavigationContainer> 
    </NativeBaseProvider>
  );
};
