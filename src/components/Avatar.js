import { Avatar } from "native-base";
import styles from "../styles/global";

const avatar =
  "https://cdn.dribbble.com/users/2155131/screenshots/15055519/media/3449ae56049161246e133a2c7c0e86ca.jpg?compress=1&resize=1000x750&vertical=top";

const ProfileAvatar = ({ size }) => {
  return (
    <Avatar
      style={styles.avatar}
      alignSelf="center"
      size={size || "2xl"}
      source={{
        uri: avatar,
      }}
    />
  );
};

export default ProfileAvatar;
