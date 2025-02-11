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
      width="40px"
      bg="white"
      color="green"
      p={4}
      display="flex"
      justifyContent="center"
      alignItems="center"
      boxShadow="lg"
      zIndex="1000"
    >
      <VStack spacing={4}>
        <Link href="https://www.linkedin.com/in/gamzekandara/" isExternal>
          <Icon
            as={FaLinkedin}
            boxSize={15}
          />
        </Link>
        <Link href="https://x.com/GamzeKandara" isExternal>
          <Icon as={FaXTwitter} boxSize={15} />
        </Link>
        <Link href="https://github.com/Gamze1314" isExternal>
          <Icon as={FaGithub} boxSize={15} />
        </Link>
        <Link href="https://medium.com/me/stories/public" isExternal>
          <Icon as={FaMedium} boxSize={15} />
        </Link>
      </VStack>
    </Box>
  );
}
