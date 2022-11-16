import React, { useState, useEffect } from "react";
import { Box, Heading, Text, Center, FlatList } from "native-base";

export default function TipsPage() {
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
    <Center h="92%" w="100%">
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
                marginBottom="15px"
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
