import { Box, Heading, VStack, FormControl, Input, Button, Center } from "native-base";
import Logo from "../components/Logo";
import React from "react";

// https://docs.nativebase.io/login-signup-forms
// https://docs.nativebase.io/form
export default function SignUpPage() {
  const [show, setShow] = React.useState(false);

  return <Center w="100%">
    <Box safeArea p="2" w="90%" maxW="300">
      <Center>
        <Logo />
        <Heading mt="6" size="xl" color="coolGray.800" _dark={{ color: "warmGray.50" }} fontWeight="semibold">
          Welcome
        </Heading>
        <Heading mt="1" size="sm" color="coolGray.600" _dark={{ color: "warmGray.200" }} fontWeight="medium">
          Sign up to join the movement!
        </Heading>
      </Center>
      <VStack space={5} mt="12">
        <Input size="md" variant="filled" placeholder="Email"/>
        <Input size="md" variant="filled" placeholder="Name"/>
        <Input size="md" variant="filled" type="password" placeholder="Password"/>
        <Input size="md" variant="filled" type="password" placeholder="Confirm Password"/>
        <Button mt="2" colorScheme="indigo" >
          Sign up
        </Button>
        <Button variant="link" colorScheme="indigo">
          Cancel
        </Button>
      </VStack>
    </Box>
  </Center>;
};