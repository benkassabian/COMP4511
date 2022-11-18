import { Box, Center } from "native-base";
import Header from "../components/Header";

export default function Timer({ navigation }) {
  return (
    <Box alignItems="center" bgColor="#F3EAFE" w="100%" h="100%" py="20" px="4" >
      <Header heading={"Timer"} navigation={navigation} />
      {/* <HStack h="12" mb="4" pr="10">
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
      </HStack> */}

      <Center safeArea p="2" h="100%" w="100%" mt="2" px="4" space="4">
      </Center>
    </Box>
  );
}
