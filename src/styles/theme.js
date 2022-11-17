// 1. Import the extendTheme function
import { LinearGradient } from "expo-linear-gradient";
import { extendTheme, NativeBaseProvider } from "native-base";

// 2. Extend the theme to include custom colors, fonts, etc
const newColorTheme = {
  primary: {
    600: "#8888D7",
  },
  secondary: {
    600: "#C3D3E2",
  },
  config: {
    initialColorMode: 600,
  },
  background:"#000000", 
};

const theme = extendTheme({
  colors: newColorTheme,
  components: {
    Button: {
      solid: {
        rounded: "lg",
        colorScheme: "primary",
      },
    },
    //   defaultProps: {
    //     colorScheme: "primary",
    //   },
    // },
  },
});

export default theme;
