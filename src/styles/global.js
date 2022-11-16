import { StyleSheet, Dimensions } from "react-native";

var height = Dimensions.get("window").height;
var width = Dimensions.get("window").width;

const colors = {
  primary: "#8888D7",
  secondary: "#C3D3E2",
};

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    left: "5%",
    top: "5%",
  },
  container: {
    position: "relative",
    // margin: "5%",
    padding: "5%",
    flex: 1,
    height: height,
    width: width,
    alignItems: "center",
    justifyContent: "left",
    overflow: "scroll",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: width,
  },
  button: {
    width: "80vw",
  },
  avatar: {
    height: 140,
    width: 140,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
  tile: {
    borderRadius: 20,
    backgroundColor: "grey",
    height: 170,
    width: 170,
  },
  profileHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  shadow: {
    shadowColor: "#8888D7",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.9,
    shadowRadius: 10,
  },
});

export default styles;
