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

export default function CalculatorSettings() {
  const [isCustom, setIsCustom] = useState(undefined);

  useEffect(() => {
    const setData = async () => {
      // await storeData("isCustomFlowRate", false);
      const value = await getData("isCustomFlowRate");
      console.log("iscustom", value);

      setIsCustom(value);
    };
    setData();
  }, []);

  const handleChange = async () => {
    await setIsCustom(!isCustom);
    await storeData("isCustomFlowRate", isCustom);
  };

  return (
    <Center style={styles.container}>
      <BackButton />
      <Heading size="xl" fontWeight="thin" paddingY={5}>
        Calculator Settings
      </Heading>
      <VStack width="100%" divider={<Divider />} space={5}>
        <MenuItem>
          <FeatherIcon name="droplet" size={30} />
          <Text fontSize="xl">Use Custom Flow Rate?</Text>
          <Switch size="md" isChecked={isCustom} onChange={handleChange} />
        </MenuItem>
        {isCustom && (
          <Input
            type="number"
            size="md"
            px="6"
            py="4"
            variant="rounded"
            bg="coolGray.100"
            placeholder="Shower Head Flow Rate (L/s)"
          />
        )}
      </VStack>
      <Button width="100%" rounded="xl" size="lg" mt="auto">
        Save
      </Button>
    </Center>
  );
}
