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
import React from "react";
import ProfileAvatar from "../components/Avatar";
import styles from "../styles/global";
import tileIcons from "../utils/homepageIcons.json";

const Tile = ({ name, link, navigation }) => {
  return (
    <Box alignItems="center" margin="3" flexBasis="40%">
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
      <Text fontSize="xl">{name}</Text>
    </Box>
  );
};

const ProfileHeader = () => {
  return (
    <HStack justifyContent="space-around" alignItems="center" width="100%">
      <Heading fontSize="4xl" fontWeight="thin">
        Welcome!
      </Heading>
      <ProfileAvatar />
    </HStack>
  );
};

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <VStack> */}
      <ProfileHeader />
      <Flex
        flexWrap="wrap"
        flexDirection="row"
        width="100%"
        justifyContent="space-around"
        alignItems={"center"}
      >
        <Tile name="Shower Timer" link="Home" navigation={navigation} />
        <Tile name="Logbook" link="Home" navigation={navigation} />
        {/* <HStack space="lg"> */}
        <Tile name="Challenges" link="Home" navigation={navigation} />
        <Tile name="Calculator" link="Calculator" navigation={navigation} />
        {/* <HStack space="lg"> */}
        <Tile name="Tips" link="Tips" navigation={navigation} />
        <Tile name="Games" link="Home" navigation={navigation} />
      </Flex>
      {/* </VStack> */}
    </View>
  );
};

export default Home;
