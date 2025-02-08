'use client'


import Link from 'next/link'
import { usePathname } from "next/navigation";


export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="w-full h-20 bg-emerald-800 sticky top-0 flex items-center">
      <div className="flex space-x-6 text-white text-lg ml-auto mr-20">
        <Link href="/">
          Home
        </Link>
        <Link
          href="/blogs"
        >
          Blogs
        </Link>
        <Link
          href="/projects"
        >
          Projects
        </Link>
        {/* <Link
          href="/contact"
        >
          Contact
        </Link> */}
      </div>
    </div>
  );
}


// '@chakra-ui/react' component system works with Nextjs .