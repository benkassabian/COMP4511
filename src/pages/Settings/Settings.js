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

const MenuItem = ({ children }) => {
  return (
    <HStack flex={1} justifyContent="space-between" alignItems="center">
      {children.map((child) => child)}
    </HStack>
  );
};

export default function Settings() {
  return (
    <Flex
      style={styles.container}
      _text={{
        fontSize: "xl",
      }}
    >
      <Heading size="xl" fontWeight="thin">
        Settings
      </Heading>
      <VStack width="100%">
        <MenuItem>
          <MaterialIcon name="person-outline" size={25} />
          <Text fontSize="xl">Account</Text>
          <MaterialIcon name="chevron-right" size={25} />
        </MenuItem>
        <Divider />
        <MenuItem>
          <FeatherIcon name="droplet" size={25} />
          <Text fontSize="xl">Calculator</Text>
          <MaterialIcon name="chevron-right" size={25} />
        </MenuItem>
        <Divider />
        <MenuItem>
          <MaterialIcon name="logout" size={25} />
          <Text fontSize="xl">Logout</Text>
          <MaterialIcon name="chevron-right" size={25} />
        </MenuItem>
      </VStack>
    </Flex>
  );
}
