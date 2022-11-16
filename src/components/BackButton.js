import { IconButton } from "native-base";
import styles from "../styles/global";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

export default function BackButton({ navigation }) {
  return (
    <IconButton
      onPress={() => navigation.navigate("Home")}
      style={styles.backButton}
      icon={<MaterialIcon name="chevron-left" size={30} />}
    />
  );
}
