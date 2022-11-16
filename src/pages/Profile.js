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
import React from "react";
import styles from "../styles/global";
import ProfileAvatar from "../components/Avatar";
import NavBar from "../components/NavBar";

const ProfileTile = ({ number, text }) => {
  return (
    <Center
      height={125}
      width="40"
      backgroundColor="white"
      borderRadius="15"
      style={styles.shadow}
    >
      <Text bold color="#8888D7" fontSize="2xl" textAlign="center">
        {number}
      </Text>
      <Text color="secondary" fontSize="sm" textAlign="center">
        {" "}
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

const Profile = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <ProfileAvatar />
        <Text fontSize="38" fontWeight="thin">
          Sandra Shore
        </Text>
        <HStack space="5" my="10">
          <ProfileTile number="52" text="Showers under 5 Minutes" />
          <ProfileTile number="8" text="Day Tracking Streak" />
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
          overflow="scroll"
        >
          <Badge
            imageUrl={
              "https://static.vecteezy.com/system/resources/previews/003/487/356/non_2x/money-bag-cash-coins-money-and-clock-payment-icon-cartoon-time-is-money-background-concept-free-vector.jpg"
            }
            label="Super Saver"
          />
          <Badge
            imageUrl={
              "https://static.vecteezy.com/system/resources/previews/003/487/356/non_2x/money-bag-cash-coins-money-and-clock-payment-icon-cartoon-time-is-money-background-concept-free-vector.jpg"
            }
            label="Super Saver"
          />
          <Badge
            imageUrl={
              "https://static.vecteezy.com/system/resources/previews/003/487/356/non_2x/money-bag-cash-coins-money-and-clock-payment-icon-cartoon-time-is-money-background-concept-free-vector.jpg"
            }
            label="Super Saver"
          />
          <Badge
            imageUrl={
              "https://static.vecteezy.com/system/resources/previews/003/487/356/non_2x/money-bag-cash-coins-money-and-clock-payment-icon-cartoon-time-is-money-background-concept-free-vector.jpg"
            }
            label="Super Saver"
          />
          <Badge
            imageUrl={
              "https://static.vecteezy.com/system/resources/previews/003/487/356/non_2x/money-bag-cash-coins-money-and-clock-payment-icon-cartoon-time-is-money-background-concept-free-vector.jpg"
            }
            label="Super Saver"
          />
          <Badge
            imageUrl={
              "https://static.vecteezy.com/system/resources/previews/003/487/356/non_2x/money-bag-cash-coins-money-and-clock-payment-icon-cartoon-time-is-money-background-concept-free-vector.jpg"
            }
            label="Super Saver"
          />
          <Badge
            imageUrl={
              "https://static.vecteezy.com/system/resources/previews/003/487/356/non_2x/money-bag-cash-coins-money-and-clock-payment-icon-cartoon-time-is-money-background-concept-free-vector.jpg"
            }
            label="Super Saver"
          />
          <Badge
            imageUrl={
              "https://static.vecteezy.com/system/resources/previews/003/487/356/non_2x/money-bag-cash-coins-money-and-clock-payment-icon-cartoon-time-is-money-background-concept-free-vector.jpg"
            }
            label="Super Saver"
          />
          <Badge
            imageUrl={
              "https://static.vecteezy.com/system/resources/previews/003/487/356/non_2x/money-bag-cash-coins-money-and-clock-payment-icon-cartoon-time-is-money-background-concept-free-vector.jpg"
            }
            label="Super Saver"
          />
          <Badge
            imageUrl={
              "https://static.vecteezy.com/system/resources/previews/003/487/356/non_2x/money-bag-cash-coins-money-and-clock-payment-icon-cartoon-time-is-money-background-concept-free-vector.jpg"
            }
            label="Super Saver"
          />
          <Badge
            imageUrl={
              "https://static.vecteezy.com/system/resources/previews/003/487/356/non_2x/money-bag-cash-coins-money-and-clock-payment-icon-cartoon-time-is-money-background-concept-free-vector.jpg"
            }
            label="Super Saver"
          />
          <Badge
            imageUrl={
              "https://static.vecteezy.com/system/resources/previews/003/487/356/non_2x/money-bag-cash-coins-money-and-clock-payment-icon-cartoon-time-is-money-background-concept-free-vector.jpg"
            }
            label="Super Saver"
          />
        </Flex>
      </View>
    </ScrollView>
  );
};

export default Profile;
