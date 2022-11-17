import AsyncStorage from "@react-native-async-storage/async-storage";
import { Box, Center, Checkbox, Image, Text, useToast } from "native-base";
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
    <Center h="100%" w="100%">
      <Box safeArea p="2" h="100%" w="90%" maxW="320">
        <Center>
          <Header heading={"Challenges"} navigation={navigation} />
        </Center>

        <Image
          source={require("../../assets/VirtualCharacter.png")}
          display="block"
          style={{
            width: 140,
            height: 120,
            position: "relative",
            top: 0,
            left: 0,
            right: 0,
          }}
          resizeMode={"contain"}
          alt="virtual character"
        />
        <Text
          textAlign="left"
          fontSize="18"
          color="#37CDDD"
          fontWeight="semibold"
          marginTop="0px"
          top="120"
          left="150"
          position="absolute"
        >
          Here are{"\n"}your Daily{"\n"}Challenges!
        </Text>

        <TouchableOpacity
          style={{
            maxHeight: "75%",
            minWidth: "100%",
            paddingTop: 10,
            paddingLeft: 15,
            backgroundColor: "#e8ebf5",
            borderRadius: "12px",
            marginTop: 15,
            alignItems: "left",
            borderColor: "#989CA0",
            borderWidth: "1",
          }}
          onPress={() => {
            setFirstChallengeDone(!firstChallengeDone);
          }}
        >
          <Box position="relative">
            <Text alignSelf="left" fontSize="16" fontWeight="semibold">
              {challenges[0].title}
            </Text>
            <Text alignSelf="left" marginTop="5px" fontSize="16" fontStyle="italic">
              {challenges[0].challenge}
            </Text>
            <Checkbox
              value="test"
              size="lg"
              position="relative"
              bottom="7"
              left="235"
              isChecked={firstChallengeDone}
              onPress={() => {
                setFirstChallengeDone(!firstChallengeDone);
              }}
            >
              {" "}
            </Checkbox>
          </Box>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            maxHeight: "75%",
            minWidth: "100%",
            paddingTop: 10,
            paddingLeft: 15,
            backgroundColor: "#e8ebf5",
            borderRadius: "12px",
            marginTop: 15,
            alignItems: "left",
            borderColor: "#989CA0",
            borderWidth: "1",
          }}
          onPress={() => {
            setSecondChallengeDone(!secondChallengeDone);
          }}
        >
          <Box position="relative">
            <Text alignSelf="left" fontSize="16" fontWeight="semibold">
              {challenges[1].title}
            </Text>
            <Text alignSelf="left" marginTop="5px" fontSize="16" fontStyle="italic">
              {challenges[1].challenge}
            </Text>
            <Checkbox
              value="test"
              size="lg"
              position="relative"
              bottom="7"
              left="235"
              isChecked={secondChallengeDone}
              onPress={() => {
                setSecondChallengeDone(!secondChallengeDone);
              }}
            >
              {" "}
            </Checkbox>
          </Box>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            maxHeight: "75%",
            minWidth: "100%",
            paddingTop: 10,
            paddingLeft: 15,
            backgroundColor: "#e8ebf5",
            borderRadius: "12px",
            marginTop: 15,
            alignItems: "left",
            borderColor: "#989CA0",
            borderWidth: "1",
          }}
          onPress={() => {
            setThirdChallengeDone(!thirdChallengeDone);
          }}
        >
          <Box position="relative">
            <Text alignSelf="left" fontSize="16" fontWeight="semibold">
              {challenges[2].title}
            </Text>
            <Text alignSelf="left" marginTop="5px" fontSize="16" fontStyle="italic">
              {challenges[2].challenge}
            </Text>
            <Checkbox
              value="test"
              size="lg"
              position="relative"
              bottom="7"
              left="235"
              isChecked={thirdChallengeDone}
              onPress={() => {
                setThirdChallengeDone(!thirdChallengeDone);
              }}
            >
              {" "}
            </Checkbox>
          </Box>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            maxHeight: "75%",
            minWidth: "100%",
            paddingTop: 10,
            paddingLeft: 15,
            backgroundColor: "#e8ebf5",
            borderRadius: "12px",
            marginTop: 15,
            alignItems: "left",
            borderColor: "#989CA0",
            borderWidth: "1",
          }}
          onPress={() => {
            setFourthChallengeDone(!fourthChallengeDone);
          }}
        >
          <Box position="relative">
            <Text alignSelf="left" fontSize="16" fontWeight="semibold">
              {challenges[3].title}
            </Text>
            <Text alignSelf="left" marginTop="5px" fontSize="16" fontStyle="italic">
              {challenges[3].challenge}
            </Text>
            <Checkbox
              value="test"
              size="lg"
              position="relative"
              bottom="7"
              left="235"
              isChecked={fourthChallengeDone}
              onPress={() => {
                setFourthChallengeDone(!fourthChallengeDone);
              }}
            >
              {" "}
            </Checkbox>
          </Box>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            minHeight: "6%",
            minWidth: "100%",
            padding: 13,
            backgroundColor: "#9ca9d4",
            borderRadius: "12px",
            marginTop: 30,
            alignItems: "center",
            borderColor: "#989CA0",
            borderWidth: "1",
          }}
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
          <Text fontSize="16.5" color="#ffffff">
            Save
          </Text>
        </TouchableOpacity>
      </Box>
    </Center>
  );
}
