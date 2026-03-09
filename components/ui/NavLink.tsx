'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React from 'react'

interface Props {
  href: string
  children: React.ReactNode
}

export default function NavLink({ href, children }: Props) {
  const pathname = usePathname()

  const isActive =
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <Link
      href={href}
      className={`transition-colors duration-200 ${
        isActive ? 'text-green-600 font-bold' : 'text-gray-600 hover:text-green-600'
      }`}
    >
      {children}
    </Link>
  )
}