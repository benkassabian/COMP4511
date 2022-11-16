// TO DO: SARAH
import {
  Box,
  Heading,
  Text,
  Link,
  HStack,
  VStack,
  Input,
  Button,
  Center,
  View,
  Image,
  Pressable,
  Stack,
} from "native-base";
import Logo from "../components/Logo";
import React from "react";
import Avatar from "../components/Avatar";
import styles from "../styles/global";
import ProfileAvatar from "../components/Avatar";
import tileIcons from "../utils/homepageIcons.json";

const Tile = ({ name, link }) => {
  return (
    <Box alignItems="center" my="3">
      <Pressable
        cursor="pointer"
        // py="3"
        // flex={1}
        // onPress={() => setSelected(0)}
      >
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
    <Stack direction="row" style={styles.profileHeader}>
      <Text fontSize={40} fontWeight="thin">
        Welcome!
      </Text>
      <ProfileAvatar />
    </Stack>
  );
};

const Home = () => {
  return (
    <View style={styles.container}>
      <Stack direction="column">
        <ProfileHeader />
        <Stack direction="row" space="lg">
          <Tile name="Shower Timer" />
          <Tile name="Logbook" />
        </Stack>
        <Stack direction="row" space="lg">
          <Tile name="Challenges" />
          <Tile name="Calculator" />
        </Stack>
        <Stack direction="row" space="lg">
          <Tile name="Tips" />
          <Tile name="Games" />
        </Stack>
      </Stack>
    </View>
  );
};

export default Home;
