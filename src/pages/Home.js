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
} from "native-base";
import Logo from "../components/Logo";
import React from "react";
import ProfileAvatar from "../components/Avatar";
import styles from "../styles/global";
import tileIcons from "../utils/homepageIcons.json";

const Tile = ({ name, link, navigation }) => {
  return (
    <Box alignItems="center" my="3">
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
    <HStack style={styles.profileHeader}>
      <VStack>
        <Heading fontSize="2xl" fontWeight="thin">
          Welcome!
        </Heading>
      </VStack>
      <ProfileAvatar />
    </HStack>
  );
};

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <VStack>
        <ProfileHeader />
        <HStack space="lg">
          <Tile name="Shower Timer" link="Home" navigation={navigation} />
          <Tile name="Logbook" link="Home" navigation={navigation} />
        </HStack>
        <HStack space="lg">
          <Tile name="Challenges" link="Home" navigation={navigation} />
          <Tile name="Calculator" link="Calculator" navigation={navigation} />
        </HStack>
        <HStack space="lg">
          <Tile name="Tips" link="Tips" navigation={navigation} />
          <Tile name="Games" link="Home" navigation={navigation} />
        </HStack>
      </VStack>
    </View>
  );
};

export default Home;
