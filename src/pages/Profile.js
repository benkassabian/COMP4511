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
import React, { useEffect, useState } from "react";
import styles from "../styles/global";
import ProfileAvatar from "../components/Avatar";
import NavBar from "../components/NavigationPanel";
import { getBadges, getData, getName } from "../utils/store";

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

const BadgeImages = {
  "Super Saver":
    "https://static.vecteezy.com/system/resources/previews/003/487/356/non_2x/money-bag-cash-coins-money-and-clock-payment-icon-cartoon-time-is-money-background-concept-free-vector.jpg",
  "Octo Streaker":
    "https://static.vecteezy.com/system/resources/previews/006/153/382/non_2x/cute-octopus-cartoon-character-holding-book-and-pencil-free-vector.jpg",
};

const Profile = () => {
  const [badges, setBadges] = useState([]);
  const [name, setName] = useState(undefined);

  useEffect(() => {
    const getData = async () => {
      const badgeData = await getBadges();
      if (badgeData !== undefined) await setBadges(badgeData);

      const nameData = await getName();
      if (nameData !== undefined) setName(nameData);
    };
    getData();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
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
          {badges.length > 0 ? (
            badges.map((badge, key) => (
              <Badge key={key} imageUrl={BadgeImages[badge]} label={badge} />
            ))
          ) : (
            <Text textAlign={"center"} fontSize="lg">
              You do not own any badges, head over to challenges to earn some!
            </Text>
          )}
        </Flex>
      </View>
    </ScrollView>
  );
};

export default Profile;
