import { HStack, Pressable } from "native-base";

const MenuItem = ({ children, onClick }) => {
  return (
    <Pressable onPress={onClick}>
      {({ isHovered, isFocused, isPressed }) => (
        <HStack
          flex={1}
          justifyContent="space-between"
          alignItems="center"
          paddingY="3"
          paddingX="5%"
          opacity={isPressed ? 0.5 : 1}
        >
          {children.map((child) => child)}
        </HStack>
      )}
    </Pressable>
  );
};

export default MenuItem;
