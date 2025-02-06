// app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
// import navbar from '../components/navbar';
// import footer from '../components/footer';
import { Provider } from "@/components/ui/provider" // provider for the styling system.
// theme provider for next-themes for color mode

const inter = Inter({ subsets: ['latin'] }); // inter font settings

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <navbar /> */}
        <Provider>{children}</Provider> {/* This is where page-specific content will be rendered */}
        {/* <footer /> */}
      </body>
    </html>
  );
}



// layout.tsx files created automatically for each page if it s not created before running the dev server. 
// This is app (root) layout, renders  children components.
//pages are rendered inside the layout.
// you define navbar, footer once here.

// Home Blogs Projects About 
