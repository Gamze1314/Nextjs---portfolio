// nextjs uses _app.js to wrap all pages, applies custom layout.
"use client";

import { ChakraProvider } from "@chakra-ui/react";


function Providers({ children }) {
  return <ChakraProvider>{children}</ChakraProvider>;  // no value required
}

export default Providers;
