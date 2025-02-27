"use client";

import { Box, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      as="footer"
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      bg="white" // Optional background color
      color="white" // Optional text color
      py={2} // Optional padding
    >
      <Flex
        justify="center"
        align="center"
        wrap="wrap"
        w="100%"
        h="50%" // Ensures full height for centering vertically
      >
        <Text color="gray" fontSize="xs">
          &copy; {new Date().getFullYear()} Gamze Kandara. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
