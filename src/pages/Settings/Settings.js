import {
  Alert,
  Image,
  View,
  Center,
  Box,
  Heading,
  FormControl,
  Input,
  Link,
  Button,
  Text,
  VStack,
  HStack,
  Menu,
  Divider,
  Flex,
} from "native-base";

import styles from "../../styles/global";
import React, { Children, useState } from "react";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import Header from "../../components/Header";
import MenuItem from "../../components/SettingsMenuItem";

export default function Settings({ navigation }) {
  const [isLogout, setLogout] = useState(false);
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
          <Text fontSize="xl">Calculator</Text>
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
      </VStack>
    </Flex>
  );
}
