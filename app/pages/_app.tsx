
import type { AppProps } from "next/app";
import "../styles/global.css"; // Import global CSS styles
import { ChakraProvider } from "@chakra-ui/react";

const App = ({ Component, pageProps }: AppProps) => {
 return (
 <ChakraProvider>
 <Component { ...pageProps} />
 </ChakraProvider>
 );
 }

export default App


