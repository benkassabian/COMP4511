import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  VStack,
  NativeBaseProvider,
} from "native-base";
import { RefreshControl, SafeAreaView, ScrollView, StyleSheet } from "react-native";

const tips = [
  "Brush your teeth with the tap off  😁",
  "Time your showers and challenge yourself to take a minute off  ⏱️",
  "Only use your dishwasher and washing machine with full loads  🧺",
  "Wash your car using a bucket instead of using a running hose  🪣",
  "Install water-saving heads or flow restrictors  🚿",
  "Take baths instead of having \nshowers  🛀🏾",
  "Water your garden during the \ncool parts of the day  🌻",
  "Plant drought-resistant trees \nand plants  🌳",
  "Install a rain-water tank  🌧️",
  "Water your lawn only when \nit needs it  🏡",
];

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function TipsPage() {
  const [shuffledTips, setShuffledTips] = useState([]);
  // const [refreshing, setRefreshing] = useState(false);

  function shuffleArray() {
    console.log("shuffle array");
    for (var i = tips.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = tips[i];
      tips[i] = tips[j];
      tips[j] = temp;
    }

    setShuffledTips(tips);
  }

  useEffect(() => {
    shuffleArray();
  }, []);
  //refreshing prop

  // const onRefresh = React.useCallback(() => {
  //   setRefreshing(true);
  //   wait(2000).then(() => setRefreshing(false));
  // }, []);

  return (
    <Center h="100%" w="100%">
      <Box safeArea p="2" h="100%" w="90%" maxW="320">
        <Center marginBottom="50px" marginTop="20px">
          <Heading
            mt="0"
            size="xl"
            color="coolGray.800"
            _dark={{ color: "warmGray.50" }}
            fontWeight="semibold"
          >
            Tips
          </Heading>
        </Center>
        {/* <SafeAreaView style={styles.container}>
          <ScrollView
            contentContainerStyle={styles.scrollView}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          > */}
        <VStack space={6} alignItems="center">
          {shuffledTips.splice(0, 5).map((tip, index) => {
            return (
              <Center
                key={index}
                h="76"
                minWidth="100%"
                bg="#FCFCFF"
                rounded="md"
                borderWidth="1"
                borderColor="gray.400"
                padding="10px"
              >
                <Text textAlign="center" fontSize="16.5">
                  {tip}
                </Text>
              </Center>
            );
          })}
        </VStack>
        <Text> Pull down to see RefreshControl indicator</Text>
        {/* </ScrollView>
        </SafeAreaView> */}
      </Box>
    </Center>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    // backgroundColor: "none",
    alignItems: "center",
    justifyContent: "center",
  },
});
