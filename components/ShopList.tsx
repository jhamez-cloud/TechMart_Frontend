import React from 'react'

export default function ShopList({children}:{children:React.ReactNode}) {
  return (
    <div className='w-full h-100 grid grid-cols-4 gap-6 gap-y-8'>
        {children}
    </div>
  )
}