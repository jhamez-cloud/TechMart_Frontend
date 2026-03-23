import React from 'react'

export default function Brands_Categories() {
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>

      {/* BRANDS */}
      <div className='w-full rounded-md bg-white px-4 md:px-9 py-4 md:py-6'>
        <div className='w-full flex justify-between items-center mb-6 md:mb-8'>
          <h1 className='text-lg md:text-2xl font-bold'>FEATURED BRANDS</h1>
          <a href="" className='text-sm md:text-lg font-mono text-gray-400'>View All</a>
        </div>

        <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 md:gap-y-12 place-items-center'>
          <li><img className='max-h-10 object-contain' src="/logos/brand1.png" alt="" /></li>
          <li><img className='max-h-10 object-contain' src="/logos/brand2.png" alt="" /></li>
          <li><img className='max-h-10 object-contain' src="/logos/brand3.png" alt="" /></li>
          <li><img className='max-h-10 object-contain' src="/logos/brand4.png" alt="" /></li>
          <li><img className='max-h-10 object-contain' src="/logos/brand5.png" alt="" /></li>
          <li><img className='max-h-10 object-contain' src="/logos/brand6.png" alt="" /></li>
          <li><img className='max-h-10 object-contain' src="/logos/brand7.png" alt="" /></li>
          <li><img className='max-h-10 object-contain' src="/logos/brand11.png" alt="" /></li>
          <li><img className='max-h-10 object-contain' src="/logos/brand9.png" alt="" /></li>
          <li><img className='max-h-10 object-contain' src="/logos/brand10.png" alt="" /></li>
        </ul>
      </div>

      {/* CATEGORIES */}
      <div className='w-full rounded-md bg-white px-4 md:px-9 py-4 md:py-6'>
        <div className='w-full flex items-center justify-between mb-6 md:mb-8'>

          <div className='flex items-center space-x-3 md:space-x-4'>
            <h1 className='text-lg md:text-2xl font-bold'>TOP CATEGORIES</h1>
            <a href="" className='text-sm md:text-lg font-mono text-gray-400'>View All</a>
          </div>

          <div className='hidden sm:flex w-20 h-5 bg-gray-300 rounded-2xl p-2 text-xs items-center justify-between font-mono text-white'>
            <p className='hover:text-green-300 cursor-pointer'>Prev</p>
            <p className='hover:text-green-300 cursor-pointer'>Next</p>
          </div>
        </div>

        <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 md:gap-y-12'>
          <li>
            <figure className='flex flex-col justify-center items-center text-center'>
              <img className='h-12 object-contain' src="/logos/category1.png" alt="" />
              <figcaption className='text-sm md:text-lg font-semibold'>PC Gaming</figcaption>
            </figure>
          </li>

          <li>
            <figure className='flex flex-col justify-center items-center text-center'>
              <img className='h-12 object-contain' src="/logos/category2.png" alt="" />
              <figcaption className='text-sm md:text-lg font-semibold'>Headphones</figcaption>
            </figure>
          </li>

          <li>
            <figure className='flex flex-col justify-center items-center text-center'>
              <img className='h-12 object-contain' src="/logos/category3.png" alt="" />
              <figcaption className='text-sm md:text-lg font-semibold'>Monitors</figcaption>
            </figure>
          </li>

          <li>
            <figure className='flex flex-col justify-center items-center text-center'>
              <img className='h-12 object-contain' src="/logos/category4.png" alt="" />
              <figcaption className='text-sm md:text-lg font-semibold'>Laptops</figcaption>
            </figure>
          </li>
        </ul>
      </div>

    </div>
  )
}