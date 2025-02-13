"use client";

import { Box, Flex, Link, Text } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box
      as="nav"
      position="fixed"
      top="0"
      left="0"
      width="140%"
      bg="gray.900"
      color="black"
      fontSize="xs"
      py={2}
      px={8}
      mb={6}
      mt={6}
      zIndex="1000"
    >
      <Flex justify="center" align="center" wrap="wrap">
        <Flex
          as="ul"
          listStyleType="none"
          justify="center"
          align="center"
          gap={15}
        >
          <Link href="#home" scrollBehavior="smooth">
            <Text
              color="black"
              _hover={{ color: "green" }}
              fontSize="xs"
              fontWeight="medium"
            >
              Home
            </Text>
          </Link>
          <Link href="#experience" scrollBehavior="smooth">
            <Text
              color="black"
              _hover={{ color: "green" }}
              fontSize="xs"
              fontWeight="medium"
            >
              Experience
            </Text>
          </Link>
          <Link href="#projects" scrollBehavior="smooth">
            <Text
              color="black"
              _hover={{ color: "green" }}
              fontSize="xs"
              fontWeight="medium"
            >
              Projects
            </Text>
          </Link>
          <Link href="#Contact" scrollBehavior="smooth">
            <Text
              color="black"
              _hover={{ color: "green" }}
              fontSize="xs"
              fontWeight="medium"
            >
              Contact
            </Text>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}

// '@chakra-ui/react' component system works with Nextjs . App router.
