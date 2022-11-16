import { Center, Heading, Input, Button, VStack } from "native-base";

import styles from "../../styles/global";
import React, { Children, useEffect, useState } from "react";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import BackButton from "../../components/BackButton";
import Header from "../../components/Header";

export default function AccountSettings({ navigation }) {
  const [show, setShow] = React.useState(false);

  const handleClick = () => setShow(!show);

  return (
    <Center style={styles.container}>
      <Header heading={"Account Settings"} />
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
