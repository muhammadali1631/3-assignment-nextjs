import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="h-[10vh] flex bg-[#575f95] text-white justify-between items-center py-6 p-4">
        <h1 className="text-3xl font-bold">Ali Shahzad</h1>
        <nav>
            <ul className="flex gap-4 text-lg">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link href="/contact">Contact Us</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header