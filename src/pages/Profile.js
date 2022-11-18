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
  Avatar,
  View,
  Flex,
  ScrollView,
} from "native-base";
import Logo from "../components/Logo";
import React, { Component, useCallback, useEffect, useState } from "react";
import styles from "../styles/global";
import ProfileAvatar from "../components/Avatar";
import NavBar from "../components/NavigationPanel";
import { getBadges, getData, getName } from "../utils/store";
import { badgeImageMap, badgeNameMap, badgeNames } from "../utils/badges";
import { useFocusEffect } from "@react-navigation/native";

const ProfileTile = ({ number, text }) => {
  return (
    <Center
      height={125}
      width="20"
      backgroundColor="white"
      borderRadius="15"
      padding="2"
      overflow="wrap"
      style={styles.shadow}
    >
      <Text bold color="#8888D7" fontSize="2xl" textAlign="center">
        {number}
      </Text>
      <Text color="secondary" fontSize="xs" textAlign="center">
        {text}
      </Text>
    </Center>
  );
};

const Badge = ({ imageUrl, label }) => {
  return (
    <VStack justifyContent={"left"}>
      <Avatar
        style={styles.shadow}
        alignSelf="center"
        size={"2xl"}
        margin="5"
        source={{
          uri: imageUrl,
        }}
      />
      <Text fontSize="lg" fontWeight="thin" textAlign="center">
        {label}
      </Text>
    </VStack>
  );
};

const Profile = (navigation) => {
  const [badges, setBadges] = useState([]);
  const [name, setName] = useState(undefined);

  const setData = useCallback(async () => {
    // setting name
    const username = await getName();
    if (username !== undefined) setName(username);

    // retrieving badges
    // setBadges([]);
    badgeNames.map(async (name, i) => {
      const data = await getData(name);
      console.log("isbadge ", name, data);
      if (data === true) {
        await setBadges((prev) => [...prev, badgeNameMap[name]]);
        console.log(badges);
      }
    });
  }, []);

  useFocusEffect(
    useCallback(() => {
      setData();
      return () => {
        setBadges([]);
      };
    }, [])
  );

  return (
    <ScrollView height={"100%"} bgColor="#F3EAFE">
      <View
        alignItems="center"
        w="100%"
        pt="20"
        // px="4"
      >
        <ProfileAvatar />
        <Text fontSize="38" fontWeight="thin">
          {name || ""}
        </Text>
        <HStack space="5" my="10">
          <ProfileTile number="52" text="Showers < 5 Min" />
          <ProfileTile number="8" text="Day Track Streak" />
          <ProfileTile number="10" text="High Scores" />
        </HStack>
        <Text bold color="#8888D7" fontSize="2xl" textAlign="left">
          Badges
        </Text>
        <Flex
          direction="row"
          flexWrap={"wrap"}
          width="400"
          justifyContent={"center"}
          overflowX="wrap"
          overflowY="scroll"
        >
          <Badge
            imageUrl={badgeImageMap["Drip Detective"]}
            label={"Drip Detective"}
          />
          {badges.length > 0 ? (
            badges.map((badge, key) => (
              <Badge key={key} imageUrl={badgeImageMap[badge]} label={badge} />
            ))
          ) : (
            <Text textAlign={"center"} italic={true} fontSize="lg">
              Head over to challenges to earn more badges!
            </Text>
          )}
        </Flex>
      </View>
    </ScrollView>
  );
};

export default Profile;
