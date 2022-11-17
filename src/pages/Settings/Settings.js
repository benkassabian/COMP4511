import { Text, VStack, Divider, Flex, AlertDialog, Button } from "native-base";

import styles from "../../styles/global";
import React, { Children, useEffect, useState } from "react";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import Header from "../../components/Header";
import MenuItem from "../../components/SettingsMenuItem";
import { clearData } from "../../utils/store";

const LogoutPopup = ({ isOpen, onClose, cancelRef, navigation }) => {
  return (
    <AlertDialog
      leastDestructiveRef={cancelRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <AlertDialog.Content>
        <AlertDialog.CloseButton />
        <AlertDialog.Header>
          Are you sure you want to log out?
        </AlertDialog.Header>
        <AlertDialog.Body>
          You will not be able to access any of our features.
        </AlertDialog.Body>
        <AlertDialog.Footer>
          <Button.Group space={2}>
            <Button
              variant="unstyled"
              colorScheme="coolGray"
              onPress={onClose}
              ref={cancelRef}
            >
              Cancel
            </Button>
            <Button
              colorScheme="danger"
              onPress={async () => {
                await clearData();
                navigation.navigate("LandingPage");
              }}
            >
              Log Out
            </Button>
          </Button.Group>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  );
};

export default function Settings({ navigation }) {
  const [isLogout, setLogout] = useState(false);

  // TO DO
  const [name, setName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  const onClose = () => setLogout(false);

  const cancelRef = React.useRef(null);
  return (
    <Flex
      style={styles.container}
      _text={{
        fontSize: "xl",
      }}
    >
      <Header heading="Settings" />
      <VStack width="100%" divider={<Divider />}>
        <MenuItem onClick={() => navigation.navigate("AccountSettings")}>
          <MaterialIcon name="person-outline" size={30} />
          <Text fontSize="xl">Account</Text>
          <MaterialIcon name="chevron-right" size={30} />
        </MenuItem>
        <MenuItem onClick={() => navigation.navigate("CalculatorSettings")}>
          <FeatherIcon name="droplet" size={30} />
          <Text fontSize="xl">Flow Rate</Text>
          <MaterialIcon name="chevron-right" size={30} />
        </MenuItem>
        <MenuItem
          onClick={() => {
            setLogout(true);
          }}
        >
          <MaterialIcon name="logout" size={30} color="red" />
          <Text fontSize="xl" color="red.600">
            Logout
          </Text>
          <MaterialIcon name="chevron-right" size={30} color="transparent" />
        </MenuItem>
        <LogoutPopup
          navigation={navigation}
          cancelRef={cancelRef}
          isOpen={isLogout}
          onClose={onClose}
        />
      </VStack>
    </Flex>
  );
}
