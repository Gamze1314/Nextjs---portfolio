'use client'

// Home component
import { Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box p={8} className="text-white">
      This is a Chakra UI Box component with a Tailwind class applied.
    </Box>
  );
};

export default Home

// / route home 
// App will render navbar and footer components on every route.
