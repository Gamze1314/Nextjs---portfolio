// nextjs uses _app.js to wrap all pages, applies custom layout.
"use client";

import { ChakraProvider } from "@chakra-ui/react";

function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider value={theme}>{children}</ChakraProvider>;  // no value required
}

export default Providers;
