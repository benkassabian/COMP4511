import { Center, Heading, IconButton } from "native-base";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import styles from "../styles/global";

export default function Header({ navigation, heading, link }) {
  return (
    <Center w="100%" h="16">
      {navigation && (
        <IconButton
          rounded="3xl"
          onPress={() => navigation.navigate(link ? link : "Home")}
          style={styles.backButton}
          icon={<MaterialIcon name="chevron-left" size={30} />}
        />
      )}
      {heading && (
        <Heading size="xl" fontWeight="thin" mb="2">
          {heading}
        </Heading>
      )}
    </Center>
  );
}
