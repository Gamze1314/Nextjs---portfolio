"use client";

import { Box, Flex, Text } from "@chakra-ui/react";

const About = () => {
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
          About Me
        </Text>
        <Text fontSize="xs" color="gray">
          Hi there!, I'm Gamze Kandara, a full-stack developer specializing in
          JavaScript, React, Python and Flask. My passion lies in developing
          efficient web applications, managing SQL databases, and ensuring
          seamless deployment. I am committed to creating dynamic, scalable, and
          user-centric web applications using modern technologies. Looking
          forward to sharpening my skills in a challenging environment. I
          guarantee enthusiasm in work and fulfilling my projects with
          inexpressible effort.
        </Text>
      </Flex>
    </Box>
  );
};

export default About;
