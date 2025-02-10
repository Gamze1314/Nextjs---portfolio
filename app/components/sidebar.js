"use client";
import { Box, Flex, Link, Icon, VStack } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaMedium, FaXTwitter } from "react-icons/fa6";

export default function SideBar() {
  return (
    <Box
      as="aside"
      position="fixed"
      left="0"
      top="0"
      height="150vh"
      width="80px"
      bg="gray.900"
      color="black"
      p={4}
      display="flex"
      justifyContent="center"
      alignItems="center"
      boxShadow="lg"
      zIndex="1000"
    >
      <VStack spacing={6}>
        <Link href="https://linkedin.com" isExternal>
          <Icon as={FaLinkedin} boxSize={30} _hover={{ color: "blue.400" }} />
        </Link>
        <Link href="https://x.com" isExternal>
          <Icon as={FaXTwitter} boxSize={30} _hover={{ color: "gray.400" }} />
        </Link>
        <Link href="https://github.com" isExternal>
          <Icon as={FaGithub} boxSize={30} _hover={{ color: "gray.500" }} />
        </Link>
        <Link href="https://medium.com" isExternal>
          <Icon as={FaMedium} boxSize={30} _hover={{ color: "green.400" }} />
        </Link>
      </VStack>
    </Box>
  );
}
