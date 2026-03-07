import React from 'react'
import BrandCard from './ui/BrandCard'

export default function Brands() {
  return (
    <div className='w-full h-120 rounded-md bg-white px-8 py-4 mt-4'>
        <div className='w-full h-10 flex items-center justify-between space-x-6 mb-8'>
            <h1 className='text-2xl font-bold'>BRAND NEW FOR YOU</h1>
            <div className='w-20 h-5 bg-gray-300 rounded-2xl p-2 text-xs flex items-center justify-between font-mono text-white'>
                <p className='hover:text-green-300'>Prev</p>
                <p className='hover:text-green-300'>Next</p>
            </div>
        </div>
        <div className='w-full h-90 grid grid-cols-4 gap-4'>
            <BrandCard 
                image='/images/zujmax_brand.png'
                title='Zumac Steel Computer Case'
                description='And an option to upgrade every 3 years'
            />
            <BrandCard 
                image='/images/gaming_monitor.png'
                title='Summer Sale with sale up to 50% OFF for curved gaming monitor'
                description='Limited Time Offer.Hurry Up.'
            />
            <BrandCard 
                image='/images/gaming_chair.png'
                title='Summer Sale with sale up to 50% OFF for foam gaming chair'
                description='Limited Time Offer.Hurry Up.'
            />
            <BrandCard 
                image='/images/ipad_pro_brand.png'
                title='iPad Pro Mini 6 - Powerful in hand'
                description='From $19.99/month for 36 months.$280.35 final payment due in month 37.'
            />
        </div>
    </div>
  )
}
