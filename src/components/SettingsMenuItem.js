const MenuItem = ({ children }) => {
  return (
    <HStack
      flex={1}
      justifyContent="space-between"
      alignItems="center"
      paddingY="3"
      paddingX="5%"
    >
      {children.map((child) => child)}
    </HStack>
  );
};

export default MenuItem;
