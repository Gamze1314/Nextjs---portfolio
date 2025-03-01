'use client'

import { Box, Flex, Text } from "@chakra-ui/react";

const Projects = () => {
  return (
    <Box id="home" as="section">
      <Flex
        direction="column"
        justify="center"
        alignItems="flex-start"
        height="370px"
        width="420px"
        p={12}
        ml={4}
        className="text-black"
      >
        <Text color="green" fontWeight="bold" fontSize="md">
          My Projects
        </Text>
      </Flex>
    </Box>
  );
}

export default Projects