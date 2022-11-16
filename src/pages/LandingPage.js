import { Pressable, Box, Heading, Button, Stack, Center, VStack, Image} from "native-base";
import Logo from "../components/Logo";

const LandingPage = ({ navigation }) => {
  return <Center w="100%" height="100%">
     <Box safeArea p="2" w="90%" maxW="300">
      <Center>
        <Pressable onPress={() => navigation.navigate('LandingPage')}><Logo /></Pressable>
        <Heading mt="6" size="xl" color="coolGray.800" _dark={{ color: "warmGray.50" }} fontWeight="semibold">
          Welcome to
        </Heading>
        <Heading mt="2" size="xl" color="coolGray.800" _dark={{ color: "warmGray.50" }} fontWeight="semibold">
          Drip Detective
        </Heading>
      <Image mt="6" source={require('../../assets/VirtualCharacter.png')} alt="Drip Detective Mascot"/>
      </Center>
      <VStack space={5} mt="12">
        <Button mt="2" colorScheme="primary" onPress={() => navigation.navigate('LoginPage')}>
          LOG IN
        </Button>
        <Button variant="outline" colorScheme="primary" onPress={() => navigation.navigate('SignUpPage')}>
          SIGN UP
        </Button>
      </VStack>
    </Box>
  </Center>;
};

export default LandingPage;
