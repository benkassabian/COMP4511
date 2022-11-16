import { StatusBar } from "expo-status-bar";
import { ImageBackground } from "react-native";
import { NativeBaseProvider, Text, Box, Button } from "native-base";

import styles from "./src/styles/global";
import theme from "./src/styles/theme";
import background from "./assets/background.png";
import LandingPage from "./src/pages/LandingPage";
import SignUpPage from "./src/pages/SignUpPage";
import JumpingGame from "./src/pages/JumpingGame";
import LoginPage from "./src/pages/LoginPage";
import NavBar from "./src/components/NavBar";
import Bird from "./src/components/Bird";
import Quiz from "./src/pages/Quiz";
import Calculator from "./src/pages/Calculator";



export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <ImageBackground style={styles.container} source={background}>
        {/* <LandingPage /> */}
        <Calculator />
        {/* <LoginPage /> */}
        {/* <NavBar /> */}
      </ImageBackground>
    </NativeBaseProvider>
  );
}
