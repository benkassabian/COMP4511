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

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <ImageBackground style={styles.container} source={background}>
        {/* <LandingPage /> */}
        <SignUpPage />
        {/* <LoginPage /> */}
        {/* <NavBar /> */}
      </ImageBackground>
    </NativeBaseProvider>
  );
}
