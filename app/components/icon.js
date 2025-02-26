import { Text } from "@chakra-ui/react";

function GIcon({ bgColor, textColor }) {
  return (
    <Text
      bg={bgColor || "black"} // Default to blue.200 if bgColor is not provided
      color={textColor || "black"} // Default to blue.800 if textColor is not provided
      fontSize="xl"
      fontWeight="bold"
      borderRadius="full"
      width="40px"
      height="40px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      G
    </Text>
  );
}

export default GIcon;
