"use client";

import { Box, Flex, Link } from "@chakra-ui/react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <Box
      as="nav"
      position="fixed"
      top="0"
      left="0"
      width="100%"
      bg="gray.900"
      color="black"
      py={3}
      px={6}
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
          gap={8}
        >
          <Link
            href="/"
            _hover={{ textDecoration: "none", color: "cyan.400" }}
            fontSize="lg"
          >
            Home
          </Link>
          <Link
            href="/blogs"
            _hover={{ textDecoration: "none", color: "cyan.400" }}
            fontSize="lg"
          >
            Blogs
          </Link>
          <Link
            href="/projects"
            _hover={{ textDecoration: "none", color: "cyan.400" }}
            fontSize="lg"
          >
            Projects
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}

// '@chakra-ui/react' component system works with Nextjs . App router.
