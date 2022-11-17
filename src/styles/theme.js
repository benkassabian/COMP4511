// 1. Import the extendTheme function
import { extendTheme, NativeBaseProvider } from "native-base";
// 2. Extend the theme to include custom colors, fonts, etc
const newColorTheme = {
  primary: {
    600: "#8888D7",
  },
  secondary: {
    600: "#37CDDD",
  },
  config: {
    initialColorMode: 600,
  },
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
