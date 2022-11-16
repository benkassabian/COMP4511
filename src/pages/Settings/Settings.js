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
    <HStack
      flex={1}
      justifyContent="space-between"
      alignItems="center"
      paddingY="3"
    >
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
      <Heading size="xl" fontWeight="thin" pb="5">
        Settings
      </Heading>
      <VStack divider={<Divider />}>
        <MenuItem>
          <MaterialIcon name="person-outline" size={30} />
          <Text fontSize="xl">Account</Text>
          <MaterialIcon name="chevron-right" size={30} />
        </MenuItem>
        <MenuItem>
          <FeatherIcon name="droplet" size={30} />
          <Text fontSize="xl">Calculator</Text>
          <MaterialIcon name="chevron-right" size={30} />
        </MenuItem>
        <MenuItem>
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
