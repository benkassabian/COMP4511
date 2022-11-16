import { Text, View } from "react-native";
import { Svg, SvgUri, Path, SvgXml } from "react-native-svg";
import { Avatar } from "native-base";
import logo from "../../assets/logo.svg";
import styles from "../styles/global";
import profileImage from "../../assets/avatar-1.png";

console.log(logo);

const ProfileAvatar = ({ size }) => {
  return (
    <Avatar
      style={styles.avatar}
      alignSelf="center"
      size={size || "2xl"}
      source={{
        uri: "https://cdn.dribbble.com/users/2155131/screenshots/15055519/media/3449ae56049161246e133a2c7c0e86ca.jpg?compress=1&resize=1000x750&vertical=top",
      }}
    />
  );
};

export default ProfileAvatar;
