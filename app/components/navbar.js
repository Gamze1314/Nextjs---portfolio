'use client'

import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import Link from 'next/link'
import { usePathname } from "next/navigation";


export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav>
      <Link className={`${pathname === "/" ? "active" : ""}`} href="/">
        Home
      </Link>
      <Link className={`${pathname === "/blogs" ? "active" : ""}`} href="/blogs">
        Blogs
      </Link>
      <Link className={`${pathname === "/about" ? "active" : ""}`} href="/projets">
        Projects
      </Link>
      <Link className={`${pathname === "/contact" ? "active" : ""}`} href="/contact">
        Contact
      </Link>
    </nav>
  );
}


// '@chakra-ui/react' component system works with Nextjs .