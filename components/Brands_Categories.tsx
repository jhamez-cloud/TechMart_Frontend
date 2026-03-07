import React from 'react'

export default function Brands_Categories() {
  return (
    <div className='w-full h-60 grid grid-cols-2 gap-4 mt-4'>
        <div className='w-full h-full rounded-md bg-white px-9 py-6'>
            <div className='w-full h-10 flex justify-between items-center mb-8'>
                <h1 className='text-2xl font-bold'>FEATURED BRANDS</h1>
                <a href="" className='text-lg font-mono text-gray-400'>View All</a>
            </div>
            <ul className='grid grid-cols-5 gap-6 gap-y-12'>
                <li><img src="/logos/brand1.png" alt="" /></li>
                <li><img src="/logos/brand2.png" alt="" /></li>
                <li><img src="/logos/brand3.png" alt="" /></li>
                <li><img src="/logos/brand4.png" alt="" /></li>
                <li><img src="/logos/brand5.png" alt="" /></li>
                <li><img src="/logos/brand6.png" alt="" /></li>
                <li><img src="/logos/brand7.png" alt="" /></li>
                <li><img src="/logos/brand11.png" alt="" /></li>
                <li><img src="/logos/brand9.png" alt="" /></li>
                <li><img src="/logos/brand10.png" alt="" /></li>
            </ul>
        </div>
        <div className='w-full h-full rounded-md bg-white px-9 py-6'>
            <div className='w-full h-10 flex items-center justify-between space-x-6 mb-8'>
                <div className='flex items-center space-x-4'>
                    <h1 className='text-2xl font-bold'>TOP CATEGORIES</h1>
                    <a href="" className='text-lg font-mono text-gray-400'>View All</a>
                </div>
                <div className='w-20 h-5 bg-gray-300 rounded-2xl p-2 text-xs flex items-center justify-between font-mono text-white'>
                    <p className='hover:text-green-300'>Prev</p>
                    <p className='hover:text-green-300'>Next</p>
                </div>
            </div>
            <ul className='grid grid-cols-4 gap-6 gap-y-12'>
                <li>
                    <figure className='flex flex-col justify-center items-center'>
                        <img src="/logos/category1.png" alt="" />
                        <figcaption className='text-lg font-semibold'>PC Gaming</figcaption>
                    </figure>
                </li>
                <li>
                    <figure className='flex flex-col justify-center items-center'>
                        <img src="/logos/category2.png" alt="" />
                        <figcaption className='text-lg font-semibold'>Headphones</figcaption>
                    </figure>
                </li>
                <li>
                    <figure className='flex flex-col justify-center items-center'>
                        <img src="/logos/category3.png" alt="" />
                        <figcaption className='text-lg font-semibold'>Monitors</figcaption>
                    </figure>
                </li>
                <li>
                    <figure className='flex flex-col justify-center items-center'>
                        <img src="/logos/category4.png" alt="" />
                        <figcaption className='text-lg font-semibold'>Laptops</figcaption>
                    </figure>
                </li>
            </ul>
        </div>
    </div>
  )
}
