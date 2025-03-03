"use client";

import { Box, Flex, Text, Image, Grid } from "@chakra-ui/react";

const Skills = () => {
  return (
    <Box id="skills" as="section" p={10} textAlign="center">
      <Flex
        position="relative"
        direction={["row", "row", "row", "row"]}
        justify="left"
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
        <Text color="green" fontWeight="bold" fontSize="xl" mb={2}>
          Skills
        </Text>
        {/* FRONTEND SECTION */}
        <Box id="frontend" as="section" p={10} mb={5}>
          <Text color="green" fontWeight="medium" fontSize="sm" mb={4}>
            Frontend
          </Text>
          <Grid templateColumns="repeat(4, 1fr)" gap={4} justifyItems="center">
            <Image
              src="/assets/js-animation.gif"
              alt="JavaScript"
              boxSize="120px"
              borderRadius="md"
            />
            <Image
              src="/assets/react.gif"
              alt="React"
              boxSize="120px"
              borderRadius="md"
            />
            <Image
              src="/assets/html.gif"
              alt="HTML"
              boxSize="120px"
              borderRadius="md"
            />
            <Image
              src="/assets/css-50.png"
              alt="CSS"
              boxSize="120px"
              borderRadius="md"
            />
            <Image
              src="/assets/tailwind.png"
              alt="Tailwind CSS"
              boxSize="120px"
              borderRadius="md"
            />
          </Grid>
        </Box>
        {/* BACKEND SECTION */}
        <Box id="backend" as="section" p={10} mb={5}>
          <Text color="green" fontWeight="medium" fontSize="sm" mb={4}>
            Backend
          </Text>
          <Grid templateColumns="repeat(4, 1fr)" gap={4} justifyItems="center">
            <Image
              src="/assets/python.gif"
              alt="Python"
              boxSize="120px"
              borderRadius="md"
            />
            <Image
              src="/assets/flask-50.png"
              alt="Flask"
              boxSize="120px"
              borderRadius="md"
            />
            <Image
              src="/assets/nodejs.png"
              alt="Node.js"
              boxSize="120px"
              borderRadius="md"
            />
          </Grid>
        </Box>
        {/* DATABASE SECTION */}
        <Box id="database" as="section" p={10} mb={5}>
          <Text color="green" fontWeight="medium" fontSize="lg" mb={4}>
            Database
          </Text>
          <Grid templateColumns="repeat(4, 1fr)" gap={4} justifyItems="center">
            <Image
              src="/assets/mysql.png"
              alt="MySQL"
              boxSize="120px"
              borderRadius="md"
            />
            <Image
              src="/assets/postgresql.png"
              alt="PostgreSQL"
              boxSize="120px"
              borderRadius="md"
            />
            <Image
              src="/assets/mongodb.png"
              alt="MongoDB"
              boxSize="120px"
              borderRadius="md"
            />
          </Grid>
        </Box>
        {/* OPS SECTION */}
        <Box id="ops" as="section" p={10} mb={5}>
          <Text color="green" fontWeight="medium" fontSize="md" mb={4}>
            Ops
          </Text>
          <Grid templateColumns="repeat(4, 1fr)" gap={4} justifyItems="center">
            <Image
              src="/assets/docker.png"
              alt="Docker"
              boxSize="120px"
              borderRadius="md"
            />
            <Image
              src="/assets/kubernetes.png"
              alt="Render"
              boxSize="120px"
              borderRadius="md"
            />
            <Image
              src="/assets/aws.png"
              alt="AWS"
              boxSize="120px"
              borderRadius="md"
            />
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};

export default Skills;
