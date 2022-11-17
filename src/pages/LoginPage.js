import {
  Pressable,
  Box,
  Heading,
  Text,
  Link,
  HStack,
  VStack,
  Input,
  Button,
  Center,
} from "native-base";
import Logo from "../components/Logo";
import React from "react";
import styles from "../styles/global";

// https://docs.nativebase.io/login-signup-forms
// https://docs.nativebase.io/form
export default function LoginPage({ navigation }) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Center bgColor="#F3EAFE" w="100%" h="100%">
      <Box safeArea p="2" w="90%" maxW="320">
        <Center>
          <Pressable onPress={() => navigation.navigate("LandingPage")}>
            <Logo />
          </Pressable>
          <Heading
            mt="6"
            size="xl"
            color="coolGray.800"
            _dark={{ color: "warmGray.50" }}
            fontWeight="semibold"
          >
            Welcome back!
          </Heading>
          <Heading
            mt="2"
            size="sm"
            color="coolGray.600"
            _dark={{ color: "warmGray.200" }}
            fontWeight="medium"
          >
            Log in to track your progress
          </Heading>
        </Center>
        <VStack space={5} mt="12">
          <Input
            size="md"
            px="6"
            py="4"
            variant="rounded"
            bg="coolGray.100"
            placeholder="Email"
          />
          <Input
            size="md"
            px="6"
            py="4"
            variant="rounded"
            bg="coolGray.100"
            placeholder="Password"
            type={show ? "text" : "password"}
            InputRightElement={
              <Button
                size="md"
                rounded="none"
                w="1/5"
                bg="coolGray.400"
                h="full"
                onPress={handleClick}
              >
                {show ? "Hide" : "Show"}
              </Button>
            }
          />
          <Button
            size="lg"
            mt="4"
            onPress={() => navigation.navigate("HomePage")}
          >
            Log In
          </Button>
          <HStack mt="2" justifyContent="center">
            <Text
              fontSize="md"
              color="coolGray.600"
              _dark={{ color: "warmGray.200" }}
            >
              I'm a new user.{" "}
            </Text>
            <Link
              _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "md",
              }}
              onPress={() => navigation.navigate("SignUpPage")}
            >
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
}
