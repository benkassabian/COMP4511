import { StatusBar } from "expo-status-bar";
import { ImageBackground } from "react-native";
import { NativeBaseProvider, Text, Box, Button } from "native-base";

import styles from "./src/styles/global";
import theme from "./src/styles/theme";
import background from "./assets/background.png";
import LandingPage from "./src/pages/LandingPage";
import SignUpPage from "./src/pages/SignUpPage";
import LoginPage from "./src/pages/LoginPage";
import NavBar from "./src/components/NavBar";

// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// export default function App() {
//   return (
//     <NativeBaseProvider theme={theme}>
//       <ImageBackground style={styles.container} source={background}>
//         {/* <LandingPage /> */}
//         <SignUpPage />
//         {/* <LoginPage /> */}
//         {/* <NavBar /> */}
//       </ImageBackground>
//     </NativeBaseProvider>
//   );
// }

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LandingPage" component={LandingPage}/>
        <Stack.Screen name="SignUpPage" component={SignUpPage}/>
        <Stack.Screen name="LoginPage" component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    // <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        {/* <ImageBackground style={styles.container} source={background}> */}
          <MyStack />
        {/* </ImageBackground> */}
      </NativeBaseProvider>
    // </NavigationContainer>
  );
};