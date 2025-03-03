'use client';

import { Box, Flex, Text, Image } from "@chakra-ui/react";
import Link from 'next/link';

const Timeline = () => {
  return (
    <Box id="experience" as="section">
      <Flex
        position="relative"
        direction={["column", "column", "column", "column"]}
        justify="center"
        alignItems="left"
        width={["100%", "650px", "650px", "650px"]}
        maxWidth="650px"
        minWidth="min-w-24"
        left="50%"
        transform="translateX(-50%)"
        padding="10px"
        height="auto"
        className="text-black"
        marginTop="40px"
        marginLeft="20px"
      >
        <Text color="green" fontWeight="bold" fontSize="md">
          Timeline
        </Text>
        <Link href="https://devlaunchers.org/" isexternal rel="noopener noreferrer" target="_blank">
          <Text fontSize="xs" color="dark-gray" _hover={{ color: "gray" }} mb={2}>
            DevLaunchers Organization
          </Text>
        </Link>
        <Text fontSize="xs" color="dark-gray" mb={2}>
          Flatiron School - Full Stack Software Development - New York, NY
        </Text>
        <Text fontSize="xs" color="dark-gray">
          <Text fontSize="xs" color="dark-gray">
            -Completed JavaScript React and Flask full stack web development bootcamp in Flatiron School, NY.
          </Text>
          <Text fontSize="xs" color="dark-gray">
            -Equipped with strong knowledge of Object Oriented Programming, functional programming, web scraping, data modeling (ORM), RESTful API, design patterns, AJAX, single page applications, DOM, version control, SQL.
          </Text>
          <Text fontSize="xs" color="dark-gray" mb={2}>
            -Collaborated with classmates with JavaScript, React, Flask, Python stack.
          </Text>
        </Text>
        <Image
          src="/assets/certf-fs.png"
          alt="Flatiron School Full Stack Certificate" // Improved alt text
          boxSize={["100px", "150px", "150px"]} // Responsive image size
          borderRadius="md"
          mt={2} // added margin top.
        />
        <Text fontSize="xs" color="dark-gray" mb={2}>
          Istanbul University - Bachelor of Engineering - Istanbul, Turkey
        </Text>
      </Flex>
    </Box>
  );
};

export default Timeline;