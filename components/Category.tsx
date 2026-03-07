import React from 'react'

export default function Category() {
  return (
    <div className='w-full h-1/3 flex '>
        <div className='w-full h-1/7 items-center space-x-4'>
            <h1 className='text-2xl font-bold'>TOP CELLPHONES AND TABLETS</h1>
            <a href="" className='text-lg font-mono text-gray-400'>View All</a>
        </div>
        <div className='w-full h-6/7'>
            <div className='w-1/2 h-full'>{/* background image */}</div>
            <div className='w-1/2 h-full grid grid-cols-4 grid-rows-2'>
                
            </div>
        </div>
    </div>
  )
}
