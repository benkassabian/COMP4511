import { Center, Heading, Input, Button, VStack, Icon } from "native-base";

import styles from "../../styles/global";
import React, { Children, useCallback, useEffect, useState } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Header from "../../components/Header";
import { getData, getUser, replaceUser } from "../../utils/store";
import { useFocusEffect } from "@react-navigation/native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

export default function AccountSettings({ navigation }) {
  const [show, setShow] = React.useState(false);
  const [formData, setFormData] = React.useState(undefined);
  const [originalData, setOriginalData] = React.useState(undefined);

  const setData = useCallback(async () => {
    // setting formdata
    const email = await getData("email");
    if (email !== undefined) {
      console.log("email", email);

      const data = await getUser(email);

      console.log("user", data);
      if (data !== undefined) {
        await setFormData(data);
        await setOriginalData(data);
      }
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      setData();
    }, [])
  );

  const handleClick = () => setShow(!show);

  const handleSubmit = async () => {
    await replaceUser(originalData, formData);
    navigation.navigate("Settings");
  };

  return (
    <Center style={styles.container}>
      <Header
        heading={"Account Settings"}
        navigation={navigation}
        link="Settings"
      />
      <VStack width="100%" space={5}>
        <Input
          size="md"
          px="6"
          py="4"
          variant="rounded"
          bg="coolGray.100"
          placeholder="Name"
          defaultValue={formData?.name}
          onChangeText={(value) => {
            setFormData({ ...formData, name: value });
          }}
        />
        <Input
          size="md"
          px="6"
          py="4"
          variant="rounded"
          bg="coolGray.100"
          placeholder="Email"
          defaultValue={formData?.email}
          onChangeText={(value) => {
            setFormData({ ...formData, email: value });
          }}
        />
        <Input
          size="md"
          px="6"
          py="4"
          variant="rounded"
          bg="coolGray.100"
          defaultValue={formData?.password1}
          placeholder="Password"
          onChangeText={(value) => {
            setFormData({ ...formData, password1: value });
            setFormData({ ...formData, password2: value });
          }}
          type={show ? "text" : "password"}
          InputRightElement={
            <Pressable onPress={() => setShow(!show)}>
              <Icon
                as={
                  <MaterialIcons
                    name={show ? "visibility" : "visibility-off"}
                  />
                }
                size={5}
                mr="6"
                color="muted.400"
              />
            </Pressable>
          }
        />
      </VStack>
      <Button
        width="100%"
        rounded="xl"
        size="lg"
        mt="auto"
        onPress={handleSubmit}
      >
        Save
      </Button>
    </Center>
  );
}
