import { Box, Heading, Button, Stack } from "native-base";
import Logo from "../components/Logo";
import styles from "../styles/global";

const LandingPage = () => {
  return (
    <Box style={styles.container}>
      <Logo />
      <Heading>Welcome to Drip Detective</Heading>
      <Stack
        direction={{ base: "column" }}
        space={4}
        style={{ width: "200px" }}
      >
        <Button
          style={{ width: "400px" }}
          variant={"solid"}
          size="lg"
          colorScheme="primary"
        >
          LOG IN
        </Button>
        <Button variant={"outline"} colorScheme="primary">
          SIGN UP
        </Button>
      </Stack>
    </Box>
  );
};

export default LandingPage;
