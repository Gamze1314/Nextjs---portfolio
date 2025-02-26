"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import About from "./components/about";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Projects from "./components/projects";

const Home = () => {
  return (
    <>
      <Box id="home" as="section">
        <Flex
          direction="column"
          justify="center"
          alignItems="flex-start"
          height="370px"
          width="420px"
          p={12}
          ml={12}
          className="text-black"
        >
          <Text color="green" fontSize="md">
            Hi, my name is
          </Text>
          <Text fontSize="3xl" fontWeight="bold">
            Gamze Kandara
          </Text>
          <Text fontSize="xl" color="gray" mb={5}>
            Building the web, better.
          </Text>
          <Text fontSize="xs" color="gray">
            Innovating the web with purpose and precision. As a full-stack
            engineer, I create accessible, user-friendly digital experiences
            that leave a lasting impact.
          </Text>
        </Flex>
      </Box>

      <Box id="about" as="section">
        <Flex
          direction="column"
          justify="center"
          alignItems="flex-start"
          height="340px"
          width="420px"
          p={12}
          ml={12}
          className="text-black"
        >
          <Text color="green" fontSize="md">
            About Me
          </Text>
          <About />
        </Flex>
      </Box>

      <Box id="experience" as="section">
        <Flex
          direction="column"
          justify="center"
          alignItems="flex-start"
          height="340px"
          width="420px"
          p={12}
          ml={12}
          className="text-black"
        >
          <Text color="green" fontSize="md">
            Experience
          </Text>
          <Experience />
        </Flex>
      </Box>

      <Box id="skills" as="section">
        <Flex
          direction="column"
          justify="center"
          alignItems="flex-start"
          height="340px"
          width="420px"
          p={12}
          ml={12}
          className="text-black"
        >
          <Text color="green" fontSize="md">
            Skills
          </Text>
          <Skills />
        </Flex>
      </Box>

      <Box id="projects" as="section">
        <Flex
          direction="column"
          justify="center"
          alignItems="flex-start"
          height="340px"
          width="420px"
          p={12}
          ml={12}
          className="text-black"
        >
          <Text color="green" fontSize="md">
            Things I Have Worked On
          </Text>
          <Projects />
        </Flex>
      </Box>
    </>
  );
};

export default Home;

// / route home
// App will render navbar and footer components on every route.
