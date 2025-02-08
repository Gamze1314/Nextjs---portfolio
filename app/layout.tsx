// app/layout.tsx, responsible for wrapping the entire app in a layout structure that includes styling, fonts, and providers.
import './globals.css';
import { Inter } from 'next/font/google';
import NavBar from './components/navbar';
import Footer from './components/footer';
import Providers from "./components/chakra";

const inter = Inter({ subsets: ['latin'] }); // inter font settings

// SEO
export const metadata = {
  title: "Gamze Kandara",
  description: "Gamze Kandara's portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <Providers>
        <NavBar />
        {children}
        <Footer />
      </Providers>
      </body>
    </html>
  );
}


// layout.tsx files created automatically for each page if it s not created before running the dev server. 
// This is app (root) layout, renders  children components.
//pages are rendered inside the layout.
// you define navbar, footer once here.

// Home Blogs Projects About 
