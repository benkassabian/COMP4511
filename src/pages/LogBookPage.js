import AsyncStorage from "@react-native-async-storage/async-storage";
import { Box, Center, Text, useToast } from "native-base";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import Header from "../components/Header";

export default function LogBookPage({ navigation }) {
  const toast = useToast();
  const errorId = "error-toast";
  const successId = "success-toast";
  const infoId = "info-toast";

  const [firstAnswer, setFirstAnswer] = useState(-1);
  const [secondAnswer, setSecondAnswer] = useState(-1);

  // user earns badge
  const storeData = async () => {
    try {
      await AsyncStorage.setItem("OctostreakerBadge", "true");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Center h="97%" w="100%">
      <Box safeArea p="2" h="100%" w="90%" maxW="320">
        <Center>
          <Header heading={"Logbook"} navigation={navigation} />
        </Center>

        <Box>
          <Text fontSize="18" fontWeight="semibold">
            Did you wash the dishes today?
          </Text>

          <TouchableOpacity
            style={{
              minHeight: "7%",
              minWidth: "100%",
              padding: 20,
              backgroundColor: firstAnswer === 1 ? "#9ca9d4" : "#e8ebf5",
              borderRadius: "12px",
              marginTop: 14,
              marginBottom: 3,
              alignItems: "center",
              borderColor: "#989CA0",
              borderWidth: "1",
            }}
            onPress={() => {
              if (firstAnswer === 1) {
                setFirstAnswer(-1);
              } else {
                setFirstAnswer(1);
              }
            }}
          >
            <Text fontSize="16.5">Yes, by hand</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              minHeight: "7%",
              minWidth: "100%",
              padding: 20,
              backgroundColor: firstAnswer === 2 ? "#9ca9d4" : "#e8ebf5",
              borderRadius: "12px",
              marginTop: 14,
              marginBottom: 3,
              alignItems: "center",
              borderColor: "#989CA0",
              borderWidth: "1",
            }}
            onPress={() => {
              if (firstAnswer === 2) {
                setFirstAnswer(-1);
              } else {
                setFirstAnswer(2);
              }
            }}
          >
            <Text fontSize="16.5">Yes, by dishwasher</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              minHeight: "7%",
              minWidth: "100%",
              padding: 20,
              backgroundColor: firstAnswer === 3 ? "#9ca9d4" : "#e8ebf5",
              borderRadius: "12px",
              marginTop: 14,
              marginBottom: 3,
              alignItems: "center",
              borderColor: "#989CA0",
              borderWidth: "1",
            }}
            onPress={() => {
              if (firstAnswer === 3) {
                setFirstAnswer(-1);
              } else {
                setFirstAnswer(3);
              }
            }}
          >
            <Text fontSize="16.5">Not today</Text>
          </TouchableOpacity>
        </Box>

        <Box>
          <Text marginTop="5" fontSize="18" fontWeight="semibold">
            Did you wash your car today?
          </Text>

          <TouchableOpacity
            style={{
              minHeight: "7%",
              minWidth: "100%",
              padding: 20,
              backgroundColor: secondAnswer === 1 ? "#9ca9d4" : "#e8ebf5",
              borderRadius: "12px",
              marginTop: 14,
              marginBottom: 3,
              alignItems: "center",
              borderColor: "#989CA0",
              borderWidth: "1",
            }}
            onPress={() => {
              if (secondAnswer === 1) {
                setSecondAnswer(-1);
              } else {
                setSecondAnswer(1);
              }
            }}
          >
            <Text fontSize="16.5">Yes, with a hose</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              minHeight: "7%",
              minWidth: "100%",
              padding: 20,
              backgroundColor: secondAnswer === 2 ? "#9ca9d4" : "#e8ebf5",
              borderRadius: "12px",
              marginTop: 14,
              marginBottom: 3,
              alignItems: "center",
              borderColor: "#989CA0",
              borderWidth: "1",
            }}
            onPress={() => {
              if (secondAnswer === 2) {
                setSecondAnswer(-1);
              } else {
                setSecondAnswer(2);
              }
            }}
          >
            <Text fontSize="16.5">Yes, with a bucket of water</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              minHeight: "7%",
              minWidth: "100%",
              padding: 20,
              backgroundColor: secondAnswer === 3 ? "#9ca9d4" : "#e8ebf5",
              borderRadius: "12px",
              marginTop: 14,
              marginBottom: 3,
              alignItems: "center",
              borderColor: "#989CA0",
              borderWidth: "1",
            }}
            onPress={() => {
              if (secondAnswer === 3) {
                setSecondAnswer(-1);
              } else {
                setSecondAnswer(3);
              }
            }}
          >
            <Text fontSize="16.5">Not today</Text>
          </TouchableOpacity>
        </Box>

        <TouchableOpacity
          style={{
            minHeight: "6%",
            minWidth: "100%",
            padding: 13,
            backgroundColor: "#9ca9d4",
            borderRadius: "12px",

            marginTop: 22,
            alignItems: "center",
            borderColor: "#989CA0",
            borderWidth: "1",
          }}
          onPress={() => {
            if (firstAnswer === -1 || secondAnswer === -1) {
              if (!toast.isActive(errorId)) {
                toast.show({
                  id: errorId,
                  title: "Select an answer to each question",
                  placement: "top",
                  bgColor: "error.500",
                });
              }
            } else {
              // success - select both water saving ways
              if (firstAnswer === 1 && secondAnswer === 2) {
                if (!toast.isActive(successId)) {
                  toast.show({
                    id: successId,
                    title: "Yay, you earned the Octo-streaker badge!",
                    placement: "top",
                    bgColor: "success.600",
                  });
                  storeData();
                }
              }
              // info - select some water saving ways
              else {
                if (!toast.isActive(infoId)) {
                  toast.show({
                    id: infoId,
                    title: "Great job, try to save more water!",
                    placement: "top",
                    bgColor: "cyan.600",
                  });
                }
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
