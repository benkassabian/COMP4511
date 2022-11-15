import { Box, Heading, Button, Stack, Center, VStack} from "native-base";
import Logo from "../components/Logo";
import styles from "../styles/global";

const LandingPage = () => {
  return <Center w="100%">
     <Box safeArea p="2" w="90%" maxW="300">
      <Center>
        <Logo />
        <Heading mt="6" size="xl" color="coolGray.800" _dark={{ color: "warmGray.50" }} fontWeight="semibold">
          Welcome to
        </Heading>
        <Heading mt="2" size="xl" color="coolGray.800" _dark={{ color: "warmGray.50" }} fontWeight="semibold">
          Drip Detective
        </Heading>
      </Center>
      {/* TODO: insert mascot */}
      <VStack space={5} mt="12">
        <Button mt="2" colorScheme="primary" >
          LOG IN
        </Button>
        <Button variant="outline" colorScheme="primary">
          SIGN UP
        </Button>
      </VStack>
    </Box>
  </Center>;
};

export default LandingPage;
