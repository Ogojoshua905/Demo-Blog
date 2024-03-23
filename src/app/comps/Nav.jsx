import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
        <ul className="flex justify-between p-8 bg-slate-900 text-white">
            <li>
                <Link href="/">Home</Link>
            </li>

            <li>
                <Link href="/about">About</Link>
            </li>

            <li>
                <Link href="/contact">Contact</Link>
            </li>

            <li>
                <Link href='/blog'>Blog</Link>
            </li>
        </ul>
    </nav>
  )
}
