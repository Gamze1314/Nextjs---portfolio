import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <p>Hello World</p>
      <Link href="/users">Users</Link>
    </div>
  )
}


// / route home 
// App will render navbar and footer components on every route.
