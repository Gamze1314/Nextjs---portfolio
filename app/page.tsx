import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <p>Hello World</p>
      <Link href="/users">Users</Link>
    </main>
  )
}
