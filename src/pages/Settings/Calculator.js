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
  Menu,
  Divider,
  Flex,
  Switch,
  useControllableState,
} from "native-base";

import styles from "../../styles/global";
import React, { Children, useCallback, useEffect, useState } from "react";
import FeatherIcon from "react-native-vector-icons/Feather";
import { getData, storeData } from "../../utils/store";
import Header from "../../components/Header";
import MenuItem from "../../components/SettingsMenuItem";

export default function CalculatorSettings({ navigation }) {
  const [customFlowRate, setCustomFlowRate] = useControllableState("");
  const [isCustom, setIsCustom] = useControllableState(false);

  const setData = useCallback(async () => {
    // setting formdata
    const value = await getData("isCustomFlowRate");
    console.log("iscustom", value);

    if (value !== undefined) {
      setIsCustom(value);
      const rateData = await getData("flowRate");
      if (rateData !== undefined) setCustomFlowRate(rateData);
      console.log("rate", customFlowRate);
    }
  }, []);

  useEffect(() => {
    setData();
  }, []);

  const handleChange = async () => {
    await setIsCustom(!isCustom);
    await storeData("isCustomFlowRate", isCustom);
    await setIsCustom(!isCustom);
    await storeData("isCustomFlowRate", isCustom);
  };

  const handleSave = async () => {
    await storeData("flowRate", customFlowRate);
    navigation.navigate("Settings");
  };

  return (
    <Center style={styles.container}>
      <Header heading="Flow Rate" navigation={navigation} link="Settings" />
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
            defaultValue={customFlowRate}
            onChangeText={(value) => {
              setCustomFlowRate(value);
            }}
          />
        )}
      </VStack>
      <Button
        width="100%"
        rounded="xl"
        size="lg"
        mt="auto"
        onPress={handleSave}
      >
        Save
      </Button>
    </Center>
  );
}
