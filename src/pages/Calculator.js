import {
  Alert,
  Image,
  View,
  Center,
  Box,
  Heading,
  FormControl,
  Input,
  Link,
  Button,
  Text,
  VStack,
  HStack,
} from "native-base";
import React, { useState } from "react";
import Header from "../components/Header";
import styles from "../styles/global";

export default function Calculator({ navigation }) {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);
  const [total, setTotal] = useState(number1 + number2 + number3);
  const [text, setText] = useState("");
  //const onPressHandler = event => setText("Changed text");

  function addTogether() {
    const newTotal = number1 + number2 + number3;
    setTotal(newTotal);
    //Alert.alert('Alert');//, 'Tulos: ' + newTotal); // total has the old value in the render
    //console.log(newTotal);
    //const onPressHandler = event => setText("Changed text");
    setText("Your estimated quarterly water bill: $" + newTotal );
  }

  return (
    <Box alignItems="center" bgColor="#F3EAFE" w="100%" h="100%" py="20" px="4" >
      <Header heading={"Calculator"} navigation={navigation} />
      <VStack safeArea w="100%" px="4" space="4">
        <Heading
          color="black"
          fontWeight="medium"
          size="md"
        >
          Estimate your water bill:
        </Heading>
        <VStack space="4">
          <FormControl>
            <FormControl.Label>Daily shower time (minutes)</FormControl.Label>
            <Input size="md" px="6" py="4" variant="rounded" bg="coolGray.100" placeholder="0"
              value={number1}
              onChangeText={(v) => {
                setNumber1(Number.parseInt(v)); // Use parsed value from onChangeText
              }}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Daily kitchen water usage (litres) </FormControl.Label>
            <Input size="md" px="6" py="4" variant="rounded" bg="coolGray.100" placeholder="0"
              value={number2}
              onChange={(e) => {
                setNumber2(Number.parseInt(e.nativeEvent.text)); // or get correct value from nativeEvent onChange
              }}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Daily garden water usage (litres)</FormControl.Label>
            <Input size="md" px="6" py="4" variant="rounded" bg="coolGray.100" placeholder="0"
              value={number3}
              onChange={(e) => {
                setNumber3(Number.parseInt(e.nativeEvent.text)); // or get correct value from nativeEvent onChange
              }}
            />
          </FormControl>

        </VStack>
          <Button size="lg" mt="4" onPress={addTogether}>
          Calculate
        </Button>
          <Center w="100%">
          <Text fontSize="xl" bold>{text}</Text>
          </Center>
      </VStack>
      <HStack h="12" mb="4" pr="10">
          <Image h="32"
            source={require("../../assets/VirtualCharacter.png")}
            resizeMode={"contain"}
            alt="virtual character"
          />
          <Center h="32" w="48">
          <Text
            fontSize="lg"
            fontWeight="semibold"
          >
            Limit your shower time to reduce your water bill!
          </Text>
          </Center>
        </HStack>
    </Box>
  );
}
