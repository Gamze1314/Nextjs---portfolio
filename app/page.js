"use client";

import { Box, Flex, Text, HStack, Avatar } from "@chakra-ui/react";
import About from "./components/about";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Typical from "react-typical";

const Home = () => {
  return (
    <>
      <Box id="home" as="section">
        <Flex
          direction="row" // Align items horizontally
          justify="flex-start"
          alignItems="center" // Align text and avatar in the center
          height="370px"
          width="600px" // Increase width for spacing
          p={12}
          ml={12}
          className="text-black"
        >
          {/* Text Section */}
          <Box flex="1">
            {" "}
            {/* This makes sure text takes available space */}
            <Text color="green" fontWeight="bold" fontSize="xs">
              Hi, my name is
            </Text>
            <Text fontSize="3xl" fontWeight="bold">
              Gamze Kandara
            </Text>
            <Text fontSize="sm" fontWeight="bold" color="gray" mb={3}>
              <Typical
                steps={[
                  "I am a travel enthusiat.",
                  500,
                  "I am an active learner.",
                  500,
                  "I am detail-oriented.",
                  500,
                  "I am a creative problem solver.",
                  500,
                ]}
                loop={Infinity}
                wrapper="span"
              />
            </Text>
            <Text fontSize="xs" color="gray">
              Innovating the web with purpose and precision. As a full-stack
              engineer, I create accessible, user-friendly digital experiences
              that leave a lasting impact.
            </Text>
          </Box>

          {/* Avatar Section */}
          <Avatar
            name="Gamze Kandara"
            src="https://media.licdn.com/dms/image/D4E03AQHkbZjZJzF-OQ/profile-displayphoto-shrink_200_200/0/1679371530143?e=2147483647&v=beta&t=v1BgG1bz68RrthWTEUTItPWO-ze1D1gR6i_3PfOmaEE"
            size="xl"
            ml={8} // margin for spacing
          />
        </Flex>
      </Box>
      {/* About Section */}
      <Box id="about" as="section">
        <Flex
          direction="column"
          justify="center"
          alignItems="flex-start"
          height="350px"
          width="420px"
          p={12}
          ml={12}
          className="text-black"
        >
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
          <Projects />
        </Flex>
      </Box>
    </>
  );
};

export default Home;

// / route home
// App will render navbar and footer components on every route.
