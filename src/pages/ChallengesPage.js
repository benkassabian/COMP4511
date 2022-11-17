import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Box,
  Center,
  Checkbox,
  Image,
  Text,
  useToast,
  HStack,
  VStack,
  Flex,
  Button,
} from "native-base";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import Header from "../components/Header";

export default function ChallengesPage({ navigation }) {
  const toast = useToast();
  const errorId = "error-toast";
  const successId = "success-toast";
  const infoId = "info-toast";

  const challenges = [
    { title: "On your way", challenge: "Take A Shower Under 10 Mins" },
    { title: "Gladiator", challenge: "Take A Shower Under 2 Mins" },
    { title: "Eco-warrior", challenge: "Install a rain-water tank" },
    { title: "Champion", challenge: "Wash your car using a bucket" },
  ];

  const [firstChallengeDone, setFirstChallengeDone] = useState(false);
  const [secondChallengeDone, setSecondChallengeDone] = useState(false);
  const [thirdChallengeDone, setThirdChallengeDone] = useState(false);
  const [fourthChallengeDone, setFourthChallengeDone] = useState(false);

  // user earns badge
  const storeData = async () => {
    try {
      await AsyncStorage.setItem("SuperSaverBadge", "true");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Box alignItems="center" bgColor="#F3EAFE" w="100%" h="100%" py="20" px="4">
      <Header heading={"Challenges"} navigation={navigation} />
      <HStack h="12" mb="4" pr="10">
        <Image
          h="32"
          source={require("../../assets/VirtualCharacter.png")}
          resizeMode={"contain"}
          alt="virtual character"
        />
        <Center h="32" w="48">
          <Text fontSize="xl" fontWeight="bold">
            Here are your Daily Challenges!
          </Text>
        </Center>
      </HStack>

      <VStack safeArea p="2" h="100%" w="100%" mt="2" px="4" space="4">
        <TouchableOpacity
          style={{
            backgroundColor: "#FCFCFC",
            borderRadius: "12px",
            borderColor: "#989CA0",
            borderWidth: "1",
          }}
          onPress={() => {
            setFirstChallengeDone(!firstChallengeDone);
          }}
        >
          <HStack w="100%" px="4" py="4">
            <VStack w="90%">
              <Text alignSelf="left" fontSize="lg" fontWeight="semibold">
                {challenges[0].title}
              </Text>
              <Text alignSelf="left" mt="2" fontSize="lg" fontStyle="italic">
                {challenges[0].challenge}
              </Text>
            </VStack>
            <Center w="10%">
              <Checkbox
                value="test"
                size="lg"
                isChecked={firstChallengeDone}
                onPress={() => {
                  setFirstChallengeDone(!firstChallengeDone);
                }}
              >
                {" "}
              </Checkbox>
            </Center>
          </HStack>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#FCFCFC",
            borderRadius: "12px",
            borderColor: "#989CA0",
            borderWidth: "1",
          }}
          onPress={() => {
            setSecondChallengeDone(!secondChallengeDone);
          }}
        >
          <HStack w="100%" px="4" py="4">
            <VStack w="90%">
              <Text alignSelf="left" fontSize="lg" fontWeight="semibold">
                {challenges[1].title}
              </Text>
              <Text alignSelf="left" mt="2" fontSize="lg" fontStyle="italic">
                {challenges[1].challenge}
              </Text>
            </VStack>
            <Center w="10%">
              <Checkbox
                value="test"
                size="lg"
                isChecked={secondChallengeDone}
                onPress={() => {
                  setSecondChallengeDone(!secondChallengeDone);
                }}
              >
                {" "}
              </Checkbox>
            </Center>
          </HStack>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#FCFCFC",
            borderRadius: "12px",
            borderColor: "#989CA0",
            borderWidth: "1",
          }}
          onPress={() => {
            setThirdChallengeDone(!thirdChallengeDone);
          }}
        >
          <HStack w="100%" px="4" py="4">
            <VStack w="90%">
              <Text alignSelf="left" fontSize="lg" fontWeight="semibold">
                {challenges[2].title}
              </Text>
              <Text alignSelf="left" mt="2" fontSize="lg" fontStyle="italic">
                {challenges[2].challenge}
              </Text>
            </VStack>
            <Center w="10%">
              <Checkbox
                value="test"
                size="lg"
                isChecked={thirdChallengeDone}
                onPress={() => {
                  setThirdChallengeDone(!thirdChallengeDone);
                }}
              >
                {" "}
              </Checkbox>
            </Center>
          </HStack>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#FCFCFC",
            borderRadius: "12px",
            borderColor: "#989CA0",
            borderWidth: "1",
          }}
          onPress={() => {
            setFourthChallengeDone(!fourthChallengeDone);
          }}
        >
          <HStack w="100%" px="4" py="4">
            <VStack w="90%">
              <Text alignSelf="left" fontSize="lg" fontWeight="semibold">
                {challenges[3].title}
              </Text>
              <Text alignSelf="left" mt="2" fontSize="lg" fontStyle="italic">
                {challenges[3].challenge}
              </Text>
            </VStack>
            <Center w="10%">
              <Checkbox
                value="test"
                size="lg"
                isChecked={fourthChallengeDone}
                onPress={() => {
                  setFourthChallengeDone(!fourthChallengeDone);
                }}
              >
                {" "}
              </Checkbox>
            </Center>
          </HStack>
        </TouchableOpacity>
        <Button
          size="lg"
          mt="2"
          onPress={() => {
            // no challenges selected
            if (
              firstChallengeDone === false &&
              secondChallengeDone === false &&
              thirdChallengeDone === false &&
              fourthChallengeDone === false
            ) {
              if (!toast.isActive(errorId)) {
                toast.show({
                  id: errorId,
                  title: "Select challenges you have completed",
                  placement: "top",
                  bgColor: "error.500",
                });
              }
            }
            // all challenges completed
            else if (
              firstChallengeDone === true &&
              secondChallengeDone === true &&
              thirdChallengeDone === true &&
              fourthChallengeDone === true
            ) {
              if (!toast.isActive(successId)) {
                toast.show({
                  id: successId,
                  title: "Yay, you earned the Super Saver badge!",
                  placement: "top",
                  bgColor: "success.600",
                });
                storeData();
              }
            }
            // some challenges completed
            else {
              if (!toast.isActive(infoId)) {
                toast.show({
                  id: infoId,
                  title: "Great job, try some more challenges!",
                  placement: "top",
                  bgColor: "cyan.600",
                });
              }
            }
          }}
        >
          Save
        </Button>
      </VStack>
    </Box>
  );
}
