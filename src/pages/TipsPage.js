import { Box, Center, FlatList, Image, Text } from "native-base";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";

export default function TipsPage({ navigation }) {
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
  const [shuffledTips, setShuffledTips] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  function shuffleArray() {
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

  useEffect(() => {
    if (refreshing) {
      shuffleArray();
      setRefreshing(false);
    }
  }, [refreshing]);

  return (
    <Center h="97e%" w="100%">
      <Box safeArea p="2" h="100%" w="90%" maxW="320">
        <Center>
          <Header heading={"Tips"} navigation={navigation} />
        </Center>

        <Image
          source={require("../../assets/VirtualCharacter.png")}
          display="block"
          style={{
            marginBottom: "7%",
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
          Here are some{"\n"}Water Saving{"\n"}Tips!
        </Text>

        <FlatList
          data={shuffledTips.splice(0, 5)}
          numColumns={1}
          renderItem={({ item, index }) => {
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
                marginBottom="14px"
              >
                <Text textAlign="center" fontSize="16.5">
                  {item}
                </Text>
              </Center>
            );
          }}
          refreshing={refreshing}
          onRefresh={() => setRefreshing(true)}
        />
        <Text textAlign="center" fontSize="22" color="#37CDDD" fontWeight="semibold">
          Refresh to see new tips!
        </Text>
      </Box>
    </Center>
  );
}
