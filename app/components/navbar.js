import Link from "next/link";


export default function NavBar() {
    return (
        <nav>
            <Link href="/">Home</Link>
            <Link href="/about">Projects</Link>
            <Link href="/users">Blogs</Link>
        </nav>
    )
}

// '@chakra-ui/react' component system works with Nextjs .