import { Box, Center, FlatList, Image, Text, HStack, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";

export default function TipsPage({ navigation }) {
  const tips = [
    "Brush your teeth with the tap off  ๐",
    "Time your showers and challenge yourself to take a minute off  โฑ๏ธ",
    "Only use your dishwasher and washing machine with full loads  ๐งบ",
    "Wash your car using a bucket instead of using a running hose  ๐ชฃ",
    "Install water-saving heads or flow restrictors  ๐ฟ",
    "Take baths instead of having \nshowers  ๐๐พ",
    "Water your garden during the \ncool parts of the day  ๐ป",
    "Plant drought-resistant trees \nand plants  ๐ณ",
    "Install a rain-water tank  ๐ง๏ธ",
    "Water your lawn only when \nit needs it  ๐ก",
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
    <Box alignItems="center" bgColor="#F3EAFE" w="100%" h="100%" px="4">
    <HStack h="12" mt="8" mb="6" pr="10">
      <Image h="32"
        source={require("../../assets/VirtualCharacter.png")}
        resizeMode={"contain"}
        alt="virtual character"
      />
      <Center h="32" w="48">
      <Text
        fontSize="xl"
        fontWeight="bold"
      >
        Find out how you can save water!
      </Text>
      </Center>
    </HStack>

    <VStack safeArea p="2" h="100%" w="100%" mt="2" px="4" space="4">
        <Text textAlign="center">
          Pull down to refresh
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
                bg="#FCFCFC"
                rounded="md"
                borderWidth="1"
                borderColor="gray.400"
                padding="10px"
                marginBottom="14px"
              >
                <Text textAlign="center" fontSize="lg">
                  {item}
                </Text>
              </Center>
            );
          }}
          refreshing={refreshing}
          onRefresh={() => setRefreshing(true)}
        />
  </VStack>
</Box>
  );
}
