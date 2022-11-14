import styles from "../styles/global";

const CustomButton = ({ onClick, label, variant }) => {
  return (
    <Button
      style={styles.button}
      variant={variant}
      size="lg"
      colorScheme="primary"
    >
      {label}
    </Button>
  );
};

export default CustomButton;
