'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import Link from 'next/link'

export default function NavLink({href,children}:{href:string,children:React.ReactNode}) {

    const pathname = usePathname()
    const isActive = pathname === href

  return (
    <Link href={href} className={`${isActive?'text-blue-500':'text-gray-500'}`}>
        {children}
    </Link>
  )
}
