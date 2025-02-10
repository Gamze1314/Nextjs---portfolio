'use client'


import { Link } from "@chakra-ui/next-js";
import { usePathname } from "next/navigation";


export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="w-full fixed justify-center items-center">
      <div className="flex justify-center items-center space-x-4 p-4">
        <Link href="/" color="blue.400" _hover={{ color: "blue.500" }}>
          Home
        </Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/projects">Projects</Link>
        {/* <Link
          href="/contact"
        >
          Contact
        </Link> */}
      </div>
    </div>
  );
}


// '@chakra-ui/react' component system works with Nextjs . App router.