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
  const [text, setText] = useState("initial text");
  //const onPressHandler = event => setText("Changed text");

  function addTogether() {
    const newTotal = number1 + number2 + number3;
    setTotal(newTotal);
    //Alert.alert('Alert');//, 'Tulos: ' + newTotal); // total has the old value in the render
    //console.log(newTotal);
    //const onPressHandler = event => setText("Changed text");
    setText("Your Estimated Quarterly Water Bill Is: $" + newTotal);
  }

  return (
    <Center style={styles.container}>
      <Header heading={"Calculator"} navigation={navigation} />
      <Box safeArea p="2" py="6" w="90%" maxW="290">
        <Heading
          mt="1"
          _dark={{
            color: "black",
          }}
          color="black"
          fontWeight="medium"
          size="xs"
        >
          Please Enter Your Usage Statistics!
        </Heading>

        <VStack space={8} mt="5">
          <FormControl>
            <FormControl.Label>Daily Water Usage In Shower</FormControl.Label>
            <Input
              type="number"
              placeholder="0"
              value={number1}
              onChangeText={(v) => {
                setNumber1(Number.parseInt(v)); // Use parsed value from onChangeText
              }}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Daily Water Usage In Kitchen</FormControl.Label>
            <Input
              type="number"
              placeholder="0" 
              value={number2}
              onChange={(e) => {
                setNumber2(Number.parseInt(e.nativeEvent.text)); // or get correct value from nativeEvent onChange
              }}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Daily Water Usage In Garden</FormControl.Label>
            <Input
              type="number"
              placeholder="0"
              value={number3}
              onChange={(e) => {
                setNumber3(Number.parseInt(e.nativeEvent.text)); // or get correct value from nativeEvent onChange
              }}
            />
          </FormControl>
          <Button onPress={addTogether} mt="2" colorScheme="indigo">
            SUBMIT
          </Button>

          <Text style={{ fontSize: 22 }}>{text}</Text>
        </VStack>
      </Box>

      <View
        style={{
          flex: 1,
          paddingVertical: 40,
          paddingHorizontal: 16,
          //backgroundColor: COLORS.background,
          position: "relative",
        }}
      >
        <Image
          source={require("../../assets/VirtualCharacter.png")}
          style={{
            width: 150,
            height: 130,
            zIndex: -1,
            position: "center",
            bottom: 0,
            left: 0,
            right: 0,
            opacity: 0.5,
          }}
          resizeMode={"contain"}
          alt="virtual character"
        />
      </View>
    </Center>
  );
}
