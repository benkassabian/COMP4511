import {Alert, Image, View, Center, Box, Heading, FormControl, Input, Link, Button, Text, VStack, HStack } from "native-base";
import React, { useState } from 'react';
import Header from "../components/Header";
import styles from "../styles/global";



export default function GameHomeScreen({ navigation }) {
  

    



  return (
  <Center style={styles.container}>
    
    <Box  safeArea p="2" py="20" w="90%" maxW="290"  >
    
      
      <Center>
          <Header heading={"Games"} navigation={navigation} />
          <Heading mt="1" _dark={{
      color: "black"
    }} color="black" fontWeight="medium" size="xs">
        Enjoy A Game! 
      </Heading>
        </Center>

        

      <VStack space={10} mt="5" style={{ paddingVertical: 30}} >
        
        <Button style={{ height: 100}}  mt="2" colorScheme="indigo" size="lg" onPress={() => navigation.navigate('JumpingGame')}>
          Water Jump
        </Button>

        <Button style={{ height: 100}} mt="2" colorScheme="indigo" size="lg" onPress={() => navigation.navigate('Quiz')}>
          Play Quiz
        </Button>
        


    
        
      </VStack>
    </Box>

    <View style={{
               flex: 1,
               paddingVertical: 10,
               paddingHorizontal: 16,
               //backgroundColor: COLORS.background,
               position:'relative'
           }}>


           <Image
                source={require('../../assets/VirtualCharacter.png')}
                style={{
                    width: 150,
                    height: 130,
                    zIndex: -1,
                    position: 'center',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    opacity: 0.5
                }}
                resizeMode={'contain'}
                alt="virtual character"
                />


        
    </View>



  </Center>


  );

};