import { Pressable, Box, Heading, Text, Link, HStack, VStack, Input, Button, Center } from "native-base";
import Logo from "../components/Logo";
import React from "react";

// https://docs.nativebase.io/login-signup-forms
// https://docs.nativebase.io/form
export default function LoginPage({ navigation }) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return <Center w="100%" height="100%">
    <Box safeArea p="2" w="90%" maxW="320">
      <Center>
        <Pressable onPress={() => navigation.navigate('LandingPage')}><Logo /></Pressable>
        <Heading mt="6" size="xl" color="coolGray.800" _dark={{ color: "warmGray.50" }} fontWeight="semibold">
          Welcome back!
        </Heading>
        <Heading mt="2" size="sm" color="coolGray.600" _dark={{ color: "warmGray.200" }} fontWeight="medium">
          Log in to track your progress
        </Heading>
      </Center>
      <VStack space={5} mt="12">
        <Input size="md" px="4" py="3" variant="rounded" bg="coolGray.100" placeholder="Email"/>
        <Input size="md" px="4" py="3" variant="rounded" bg="coolGray.100" placeholder="Password"
          type={show ? "text" : "password"} InputRightElement={<Button size="md" rounded="none" w="1/5" bg="coolGray.400" h="full" onPress={handleClick}>{show ? "Hide" : "Show"}</Button>}
        />
        <Button mt="2">
          Log In
        </Button>
        <HStack mt="2" justifyContent="center">
          <Text fontSize="sm" color="coolGray.600" _dark={{ color: "warmGray.200" }}>
            I'm a new user.{" "}
          </Text>
          <Link _text={{ color: "indigo.500", fontWeight: "medium", fontSize: "sm" }} onPress={() => navigation.navigate('SignUpPage')}>
            Sign Up
          </Link>
        </HStack>
      </VStack>
    </Box>
  </Center>;
};
