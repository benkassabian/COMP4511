import { Pressable, Box, Heading, Button, Center, VStack, Image} from "native-base";
import Logo from "../components/Logo";

const LandingPage = ({ navigation }) => {
  return <Center safeArea bgColor="#F3EAFE" w="100%" h="100%">
     <Box w="90%" maxW="320">
      <Center>
        <Pressable onPress={() => navigation.navigate('Landing')}><Logo /></Pressable>
        <Heading mt="6" size="xl" color="coolGray.800" _dark={{ color: "warmGray.50" }} fontWeight="semibold">
          Welcome to
        </Heading>
        <Heading mt="2" size="xl" color="coolGray.800" _dark={{ color: "warmGray.50" }} fontWeight="semibold">
          Drip Detective
        </Heading>
      <Image mt="6" source={require('../../assets/VirtualCharacter.png')} alt="Drip Detective Mascot"/>
      </Center>
      <VStack space={5} mt="12">
        <Button size="lg" rounded="3xl" mt="2" colorScheme="primary" onPress={() => navigation.navigate('Login')}>
          Log In
        </Button>
        <Button size="lg" rounded="3xl" variant="outline" colorScheme="primary" onPress={() => navigation.navigate('Register')}>
          Sign Up
        </Button>
      </VStack>
    </Box>
  </Center>;
};

export default LandingPage;
