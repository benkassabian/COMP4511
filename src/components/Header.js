import { Heading } from "native-base";
import BackButton from "./BackButton";

export default function Header({ navigation, heading }) {
  return (
    <>
      {navigation && <BackButton navigation={navigation} />}
      <Heading size="xl" fontWeight="thin" pb="5">
        {heading}
      </Heading>
    </>
  );
}
