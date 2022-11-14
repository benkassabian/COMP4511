import { StyleSheet, Dimensions } from "react-native";

var height = Dimensions.get("window").height;
var width = Dimensions.get("window").width;
console.log(height, width);

const colors = {
  primary: "#8888D7",
  secondary: "#C3D3E2",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: width,
  },
  h1: {
    fontFamily: "Open Sans",
    fontSize: "36px",
    fontWeight: "300",
    lineHeight: "49px",
    letterSpacing: "0px",
    textAlign: "left",
  },
  h2: {
    fontFamily: "Open Sans",
    fontSize: "36px",
    fontWeight: "300",
    lineHeight: "49px",
    letterSpacing: "0px",
    textAlign: "center",
  },
  button: {
    width: "80vw",
  },
});

export default styles;
