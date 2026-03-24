import React from 'react'
import BrandCard from './ui/BrandCard'

export default function Brands() {
  return (
    <div className='w-full rounded-md bg-white px-4 md:px-8 py-4 mt-4'>

      {/* HEADER */}
      <div className='w-full flex items-center justify-between mb-6 md:mb-8'>
        <h1 className='text-lg md:text-2xl font-bold'>BRAND NEW FOR YOU</h1>

        <div className='hidden sm:flex w-20 h-5 bg-gray-300 rounded-2xl p-2 text-xs items-center justify-between font-mono text-white'>
          <p className='hover:text-green-300 cursor-pointer'>Prev</p>
          <p className='hover:text-green-300 cursor-pointer'>Next</p>
        </div>
      </div>

      {/* CARDS */}
      <div className='w-full grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-4'>

        <BrandCard 
          image='/images/zujmax_brand.png'
          title='Zumac Steel Computer Case'
          description='And an option to upgrade every 3 years'
          link='/products/laptops'
        />

        <BrandCard 
          image='/images/gaming_monitor.png'
          title='Summer Sale with sale up to 50% OFF for curved gaming monitor'
          description='Limited Time Offer.Hurry Up.'
          link='/products/laptops'
        />

        <BrandCard 
          image='/images/gaming_chair.png'
          title='Summer Sale with sale up to 50% OFF for foam gaming chair'
          description='Limited Time Offer.Hurry Up.'
          link='/products/accessories'
        />

        <BrandCard 
          image='/images/ipad_pro_brand.png'
          title='iPad Pro Mini 6 - Powerful in hand'
          description='From $19.99/month for 36 months.$280.35 final payment due in month 37.'
          link='/products/phones'
        />

      </div>

    </div>
  )
}