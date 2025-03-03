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
      <Box
        position="relative"
        left={["0", "50%", "50%"]} // Adjust left for small screens
        transform={["none", "translateX(-50%)", "translateX(-50%)"]} // Adjust transform
        maxWidth="650px"
        minWidth="min-w-24"
        marginTop={["0", "60px", "60px"]} // Adjust marginTop
        padding="10px"
      >
        <Box id="home" as="section">
          <Flex
            direction={["column", "row", "row"]}
            justify="center" // Center content horizontally
            alignItems="center"
            height="auto"
            className="text-black"
          >
            {/* Text Section */}
            <Box flex="1" textAlign={["center", "left", "left"]}> {/* Use flex: 1 to make text take available space */}
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
              ml={[0, 8, 8]} // Adjust margin
              mt={[4, 0, 0]} // add margin top on small screens
            />
          </Flex>
        </Box>
        <About />
        <Experience />
        <Skills />
        <Projects />
      </Box>
    </>
  );
};

export default Home;

// / route home
// App will render navbar and footer components on every route.
