import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="flex gap-4 p-4 bg-gray-800 text-white">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/tasks">Tasks</Link>
        </nav>
    )
}
