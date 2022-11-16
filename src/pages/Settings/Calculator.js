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
import Header from "../../components/Header";
import MenuItem from "../../components/SettingsMenuItem";

export default function CalculatorSettings({ navigation }) {
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
      <Header heading="Calculator" navigation={navigation} link="Settings" />
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