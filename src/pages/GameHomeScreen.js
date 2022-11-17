import { Alert, Image, View, Center, Box, Heading, FormControl, Input, Link, Button, Text, VStack, HStack } from "native-base";
import React, { useState } from 'react';
import Header from "../components/Header";
import styles from "../styles/global";



export default function GameHomeScreen({ navigation }) {
  return (
    <Box alignItems="center" bgColor="#F3EAFE" w="100%" h="100%" py="20">
      <Header heading={"Games"} navigation={navigation} />
      <HStack h="12" my="4" pr="6">
          <Image h="32"
            source={require("../../assets/VirtualCharacter.png")}
            resizeMode={"contain"}
            alt="virtual character"
          />
          <Center h="32" w="40">
          <Text
            fontSize="xl"
            fontWeight="bold"
          >
            Play a game!
          </Text>
          </Center>
        </HStack>
      <Box safeArea p="2" mt="6" h="100%" w="90%" maxW="320">
       <VStack space="10" mt="5" w="100%" >
          <Button mt="2" size="lg" p="10" onPress={() => navigation.navigate('JumpingGame')}>
            Water Jump
          </Button>
          <Button mt="2" size="lg" p="10" onPress={() => navigation.navigate('Quiz')}>
            Knowledge Quiz
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};