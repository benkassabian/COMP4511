import { Box, Heading, VStack, FormControl, Input, Button, Center } from "native-base";
import React from "react";

// https://docs.nativebase.io/login-signup-forms
// https://docs.nativebase.io/form
export default function SignUpPage() {
  const [formData, setData] = React.useState({});
  const [errors, setErrors] = React.useState({});

  const validate = () => {
    if (formData.email === undefined || formData.email.length < 10) {
      setErrors({ ...errors, 
        email: 'Please enter a valid email address.'
      });
      return false;
    }
    return true;
  };

  const onSubmit = () => {
    validate() ? console.log('Submitted') : console.log('Validation Failed');
  };

  return <Center w="100%">
    <Box safeArea p="2" w="90%" maxW="290" py="8">
      <Heading size="lg" color="coolGray.800" _dark={{
      color: "warmGray.50"
    }} fontWeight="semibold">
        Welcome
      </Heading>
      <Heading mt="1" color="coolGray.600" _dark={{
      color: "warmGray.200"
    }} fontWeight="medium" size="xs">
        Sign up to continue!
      </Heading>

      <VStack space={3} mt="5">
        <FormControl isRequired>
          <FormControl.Label>Email</FormControl.Label>
          <Input onChangeText={value => setData({...formData, email: value})} onPointerLeave={validate} />
          {/* {'email' in errors ? 
            <FormControl.ErrorMessage>Error</FormControl.ErrorMessage> : <FormControl.HelperText></FormControl.HelperText>
        } */}
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input type="password" />
        </FormControl>
        <FormControl>
          <FormControl.Label>Confirm Password</FormControl.Label>
          <Input type="password" />
        </FormControl>
        <Button onPress={onSubmit} mt="2" colorScheme="indigo" >
          Sign up
        </Button>
      </VStack>
    </Box>
  </Center>;
};