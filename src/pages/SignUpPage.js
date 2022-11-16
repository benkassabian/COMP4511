import { Pressable, Box, Heading, Text, Link, HStack, VStack, Input, Button, Center} from "native-base";
import Logo from "../components/Logo";
import React from "react";

// https://docs.nativebase.io/login-signup-forms
// https://docs.nativebase.io/form
export default function SignUpPage({ navigation }) {
  const [formData, setData] = React.useState({});

  return <Center w="100%" h="100%">
    <Box safeArea p="2" w="90%" maxW="320">
      <Center>
        <Pressable onPress={() => navigation.navigate('LandingPage')}><Logo /></Pressable>
        <Heading mt="6" size="xl" color="coolGray.800" _dark={{ color: "warmGray.50" }} fontWeight="semibold">
          Welcome
        </Heading>
        <Heading mt="2" size="sm" color="coolGray.600" _dark={{ color: "warmGray.200" }} fontWeight="medium">
          Sign up to join the water movement!
        </Heading>
      </Center>
      <VStack space={5} mt="12">
        <Input size="md" px="6" py="4" variant="rounded" bg="coolGray.100" placeholder="Email" 
          onChangeText={value => setData({ ...formData, email: value})}
        />
        <Input size="md" px="6" py="4" variant="rounded" bg="coolGray.100" placeholder="Name"
          onChangeText={value => setData({ ...formData, name: value})}
        />         
        <Input size="md" px="6" py="4" variant="rounded" bg="coolGray.100" type="password" placeholder="Password"
          onChangeText={value => setData({ ...formData, password1: value})}
        />
        <Input size="md" px="6" py="4" variant="rounded" bg="coolGray.100" type="password" placeholder="Confirm Password"
          onChangeText={value => setData({ ...formData, password2: value})}
        />
        <Button size="lg" mt="4">
          Sign Up
        </Button>
        <HStack mt="2" justifyContent="center">
          <Text fontSize="sm" color="coolGray.600" _dark={{ color: "warmGray.200" }}>
            I already have an account.{" "}
          </Text>
          <Link _text={{ color: "indigo.500", fontWeight: "medium", fontSize: "sm" }} onPress={() => navigation.navigate('LoginPage')}>
            Log In
          </Link>
        </HStack>
      </VStack>
    </Box>
  </Center>;
};