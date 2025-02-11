'use client'

// Home component
import { Box, Text, Flex } from "@chakra-ui/react";

const Home = () => {
  return (
    <Flex
      direction="column"
      justify="center"
      align="left"
      height="350"
      width="300px"
      p={12}
      ml={12}
      className="text-black"
    >
      <Text color="green" fontStyle="sm">Hi, my name is</Text>
      <Text fontSize="2xl" fontWeight="bold">
        Gamze Kandara.
      </Text>
      <Text fontSize="lg">Building the web, better.</Text>
    </Flex>
  );
};

export default Home;

// / route home 
// App will render navbar and footer components on every route.
