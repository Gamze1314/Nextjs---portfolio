"use client";

import { Box, Flex, Link, Text } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box
      as="nav"
      position="fixed"
      top="0"
      left="100%"
      alignItems="center"
      transform="translateX(-50%)"
      width="100%"
      maxWidth="800px" // Adjusted for responsiveness
      bg="white"
      color="black"
      fontSize="xs"
      py={2}
      px={4}
      zIndex="1000"
      display={["none", "flex", "flex", "flex"]}
    >
      <Flex justify="center" align="center">
        <Flex
          as="ul"
          listStyleType="none"
          justify="center"
          align="center"
          gap={6} 
        >
          <Link href="#home" scrollBehavior="smooth">
            <Text color="black" _hover={{ color: "green" }} fontSize="sm">
              Home
            </Text>
          </Link>
          <Link href="#experience" scrollBehavior="smooth">
            <Text color="black" _hover={{ color: "green" }} fontSize="sm">
              Timeline
            </Text>
          </Link>
          <Link href="#projects" scrollBehavior="smooth">
            <Text color="black" _hover={{ color: "green" }} fontSize="sm">
              Projects
            </Text>
          </Link>
          <Link href="#contact" scrollBehavior="smooth">
            <Text color="black" _hover={{ color: "green" }} fontSize="sm">
              Contact
            </Text>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}

// '@chakra-ui/react' component system works with Nextjs . App router.
