// TO DO: SARAH
import {
  Box,
  Text,
  HStack,
  VStack,
  View,
  Image,
  Pressable,
  Heading,
  Flex,
} from "native-base";
import Logo from "../components/Logo";
import React, { useEffect, useState } from "react";
import ProfileAvatar from "../components/Avatar";
import styles from "../styles/global";
import tileIcons from "../utils/homepageIcons.json";
import { getData } from "../utils/store";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tile = ({ name, link, navigation }) => {
  return (
    <Box alignItems="center" m="2">
      <Pressable onPress={() => navigation.navigate(link)}>
        {({ isHovered, isFocused, isPressed }) => (
          <Image
            opacity={isPressed ? 0.8 : 1}
            style={styles.tile}
            alt="tile icon"
            source={{ uri: tileIcons[name] }}
          />
        )}
      </Pressable>
      <Text fontSize="lg">{name}</Text>
    </Box>
  );
};

const ProfileHeader = ({ name }) => {
  return (
    <HStack
      justifyContent="space-around"
      alignItems="center"
      width="100%"
      py="2"
    >
      <Heading fontSize="4xl" fontWeight="light">
        Welcome{name ? ` ${name}` : ""}!
      </Heading>
      <ProfileAvatar />
    </HStack>
  );
};

const Home = ({ navigation }) => {
  const [name, setName] = useState(undefined);

  useEffect(() => {
    const setData = async () => {
      const data = await getData("username");
      if (data !== undefined) setName(data);
    };
    setData();
  }, []);

  return (
    <Box alignItems="center" bgColor="#F3EAFE" w="100%" h="100%" py="20" px="4">
      <Pressable onPress={() => navigation.navigate("Profile")}>
        <ProfileHeader name={name} />
      </Pressable>
      <VStack width="100%" justifyContent="space-around" alignItems={"center"}>
        <HStack>
          <Tile name="Shower Timer" link="Home" navigation={navigation} />
          <Tile name="Logbook" link="LogBook" navigation={navigation} />
        </HStack>
        <HStack>
          <Tile name="Challenges" link="Challenges" navigation={navigation} />
          <Tile name="Calculator" link="Calculator" navigation={navigation} />
        </HStack>
        <HStack>
          <Tile name="Tips" link="Tips" navigation={navigation} />
          <Tile name="Games" link="Games" navigation={navigation} />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Home;
