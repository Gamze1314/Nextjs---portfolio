// nextjs uses _app.js to wrap all pages, applies custom layout.
'use client'

import { ChakraProvider } from "@chakra-ui/react";


function Provider({ children }) {
  return <ChakraProvider>{children}</ChakraProvider>;  // no value required
}

export default Provider;
