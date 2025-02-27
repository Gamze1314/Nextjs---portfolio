"use client";

import { Box, Flex, Link, Text, Avatar, HStack , Circle, Float } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box
      as="nav"
      position="fixed"
      top="0"
      left="0"
      width="140%"
      bg="white"
      color="black"
      fontSize="xs"
      py={1}
      px={1}
      mb={6}
      mt={0}
      zIndex="1000"
    >
      <Flex align="center" wrap="wrap">
        <HStack className="pl-22 mr-95 mt-1 text-gray-700 text-xs">
          {/* name prop displays initials */}
          <Avatar name="Gamze Kandara" colorpalette="gray" variant="subtle" size="xs">
          </Avatar>
        </HStack>
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
            >
              Home
            </Text>
          </Link>
          <Link href="#experience" scrollBehavior="smooth">
            <Text
              color="black"
              _hover={{ color: "green" }}
              fontSize="xs"
            >
              Experience
            </Text>
          </Link>
          <Link href="#projects" scrollBehavior="smooth">
            <Text
              color="black"
              _hover={{ color: "green" }}
              fontSize="xs"
            >
              Projects
            </Text>
          </Link>
          <Link href="#contact" scrollBehavior="smooth">
            <Text
              color="black"
              _hover={{ color: "green" }}
              fontSize="xs"
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
