"use client";
import { Box, Link, Icon, VStack, StackDivider, Center } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaMedium, FaXTwitter } from "react-icons/fa6";

export default function SideBar() {
  return (
    <Box
      as="section"
      position="fixed"
      left="0"
      top="0"
      bottom="0"
      boxSize={10}
      height="150vh"
      width="40px"
      bg="white"
      color="black"
      p={4}
      display="flex"
      justifyContent="center"
      alignItems="center"
      boxShadow="md"
      zIndex="1000"
    >
      <VStack spacing={10}>
        <Link href="https://www.linkedin.com/in/gamzekandara/" isExternal>
          <Icon
            as={FaLinkedin}
            boxSize={10}
            _hover={{ textDecoration: "none", color: "blue" }}
          />
        </Link>
        <Link href="https://x.com/GamzeKandara" isExternal>
          <Icon
            as={FaXTwitter}
            boxSize={10}
            _hover={{ textDecoration: "none", color: "gray" }}
          />
        </Link>
        <Link href="https://github.com/Gamze1314" isExternal>
          <Icon
            as={FaGithub}
            boxSize={10}
            _hover={{ textDecoration: "none", color: "gray" }}
          />
        </Link>
        <Link href="https://medium.com/me/stories/public" isExternal>
          <Icon
            as={FaMedium}
            boxSize={10}
            _hover={{ textDecoration: "none", color: "gray" }}
          />
        </Link>
      </VStack>
    </Box>
  );
}
