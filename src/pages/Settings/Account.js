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
  Switch,
} from "native-base";

import styles from "../../styles/global";
import React, { Children, useEffect, useState } from "react";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import { AsyncStorage } from "react-native";
import { getData, storeData } from "../../utils/store";

const MenuItem = ({ children }) => {
  return (
    <HStack
      flex={1}
      justifyContent="space-between"
      alignItems="center"
      paddingY="3"
      paddingX="5%"
    >
      {children.map((child) => child)}
    </HStack>
  );
};

export default function AccountSettings() {
  const [show, setShow] = React.useState(false);

  const handleClick = () => setShow(!show);

  return (
    <Center style={styles.container}>
      <MaterialIcon name="chevron-left" size={30} style={styles.backButton} />
      <Heading size="xl" fontWeight="thin" pb="5">
        Account Settings
      </Heading>
      <VStack width="100%" space={5}>
        <Input
          size="md"
          px="6"
          py="4"
          variant="rounded"
          bg="coolGray.100"
          placeholder="Name"
        />
        <Input
          size="md"
          px="6"
          py="4"
          variant="rounded"
          bg="coolGray.100"
          placeholder="Email"
        />
        <Input
          size="md"
          px="6"
          py="4"
          variant="rounded"
          bg="coolGray.100"
          placeholder="Password"
          type={show ? "text" : "password"}
          InputRightElement={
            <Button
              size="md"
              rounded="none"
              w="1/5"
              bg="primary.600"
              h="full"
              onPress={handleClick}
            >
              {show ? "Hide" : "Show"}
            </Button>
          }
        />
      </VStack>
      <Button width="100%" rounded="xl" size="lg" mt="auto">
        Save
      </Button>
    </Center>
  );
}
