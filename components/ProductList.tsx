import React from 'react'
import ProductCard from './ui/ProductCard'

export default function ProductList({children}:{children:React.ReactNode}) {
  return (
    <div className='w-full h-100 grid grid-cols-5 gap-4'>
        {children}
    </div>
  )
}
