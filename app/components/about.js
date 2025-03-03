"use client";

import { Box, Flex, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box id="about" as="section">
      <Flex
        position="relative"
        direction={["column", "column", "column", "column"]}
        justify="center"
        alignItems="left"
        width={["100%", "6500px", "650px", "650px"]} // Adjust width responsively
        maxWidth="650px"
        minWidth="min-w-24"
        left="50%"
        transform="translateX(-50%)" // Center horizontally
        padding="10px"
        height="auto"
        className="text-black"
        marginTop = "40px" // add margin top
        marginLeft= "20px"
      >
        <Text color="green" fontWeight="bold" fontSize="md" textAlign={["center", "left", "left", "left"]}>
          About Me
        </Text>
        <Text fontSize="xs" color="gray" textAlign={["center", "left", "left", "left"]}>
          Hi there!, I'm a software developer specializing in
          JavaScript, React, Python and Flask. My passion lies in developing
          efficient web applications, managing SQL databases, and ensuring
          seamless deployment. I am committed to creating dynamic, scalable, and
          user-centric web applications using modern technologies. Looking
          forward to sharpening my skills in a challenging environment. I
          guarantee enthusiasm in work and fulfilling my projects with
          inexpressible effort. To learn more about the tech stack, navigate to my experience section.
        </Text>
      </Flex>
    </Box>
  );
};

export default About;
