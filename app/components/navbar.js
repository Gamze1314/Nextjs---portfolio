"use client";

import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <Box
      as="nav"
      // position="fixed"
      top="0"
      left="0"
      width="140%"
      bg="gray.900"
      color="black"
      fontSize="xs"
      py={2}
      px={8}
      mb={6}
      mt={0}
      zIndex="1000"
    >
      <Flex justify="center" align="center" wrap="wrap">
        <Flex
          as="ul"
          listStyleType="none"
          justify="center"
          align="center"
          gap={8}
        >
          <Link href="/">
            <Text
              color="black"
              _hover={{ textDecoration: "none", color: "green" }}
              fontSize="xs"
            >
              Home
            </Text>
          </Link>
          <Link href="/blogs">
            <Text
              color="black"
              _hover={{ textDecoration: "none", color: "green" }}
              fontSize="xs"
            >
              Blog
            </Text>
          </Link>
          <Link href="/projects">
            <Text
              color="black"
              _hover={{ textDecoration: "none", color: "green" }}
              fontSize="xs"
            >
              Projects
            </Text>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}

// '@chakra-ui/react' component system works with Nextjs . App router.
