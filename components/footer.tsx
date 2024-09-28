import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="h-[10vh] flex bg-[#575f95] text-gray-300 p-6 justify-center">
        <ul className="list-disc flex gap-8 text-lg">
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
    
</footer>
  )
}

export default Footer