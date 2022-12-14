import { Alert, Image, View, Center, Box, Heading, FormControl, Input, Link, Button, Text, VStack, HStack } from "native-base";
import React, { useState } from 'react';
import Header from "../components/Header";
import styles from "../styles/global";



export default function GameHomeScreen({ navigation }) {
  return (
    <Box alignItems="center" bgColor="#F3EAFE" w="100%" h="100%" py="20">
      <HStack h="12" mt="8" mb="6" pr="10">
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
          <Button style={{borderRadius: 15}} mt="2" size="lg" p="10" onPress={() => navigation.navigate('Water-Tac-Toe')}>
            <Text style={{fontSize: 20, color: "white"}} >Water-Tac-Toe</Text>
          </Button>
          <Button style={{borderRadius: 15}} mt="2" size="lg" p="10" onPress={() => navigation.navigate('Knowledge Quiz')}>
          <Text style={{fontSize: 20, color: "white"}} >Knowledge Quiz</Text>
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};