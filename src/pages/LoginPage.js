import { Pressable, Box, Heading, Text, Link, HStack, VStack, Input, Button, Center, Alert, Icon } from "native-base";
import Logo from "../components/Logo";
import React from "react";
import { getData, storeData } from "../utils/store";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const ErrorAlert = ({ message }) => {
  return (
    <Alert rounded="xl" status="error">
      <HStack flexShrink={1} space={2} justifyContent="space-between">
        <HStack space={2} flexShrink={1}>
          <Alert.Icon mt="1" />
          <Text fontSize="md" color="coolGray.800">
            {message}
          </Text>
        </HStack>
      </HStack>
    </Alert>
  );
};

export default function LoginPage({ navigation }) {
  const [show, setShow] = React.useState(false);
  const [formData, setFormData] = React.useState({});
  const [error, setError] = React.useState(undefined);

  const handleLogin = async () => {
    // ensure formdata has correct fields
    const { email, password } = formData;
    if (email && password) {
      try {
        const userData = await getData("users");

        if (userData === undefined) {
          setError(`Invalid details`);
        } else {
          userData.data.map(async (user) => {
            if (user.email === email && user.password1 === password) {
              await storeData("username", user.name);
              await navigation.navigate("Home");
            } else setError("Invalid details");
          });
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      setError(`Please enter your ${email ? "password" : "email"}.`);
    }
  };
  return (
    <Center bgColor="#F3EAFE" w="100%" h="100%">
      <Box safeArea p="2" w="90%" maxW="320">
        <Center>
          <Pressable onPress={() => navigation.navigate("Landing")}>
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
          {error && <ErrorAlert message={error} />}
          <Input
            size="md"
            px="6"
            py="4"
            variant="rounded"
            bg="coolGray.100"
            placeholder="Email"
            onChangeText={(value) => {
              setError(undefined);
              setFormData({ ...formData, email: value });
            }}
          />
          <Input
            size="md"
            px="6"
            py="4"
            variant="rounded"
            bg="coolGray.100"
            placeholder="Password"
            type={show ? "text" : "password"}
            onChangeText={(value) => {
              setError(undefined);
              setFormData({ ...formData, password: value });
            }}
            InputRightElement={
            <Pressable onPress={() => setShow(!show)}>
              <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="6" color="muted.400" />
            </Pressable>
            }
          />
          <Button size="lg" rounded="3xl" mt="4" onPress={handleLogin}>
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
              onPress={() => navigation.navigate("Register")}
            >
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
}
