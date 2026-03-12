import React from 'react'

export default function ProductsHero() {
  return (
    <div className='w-full h-110 bg-white rounded-xl mt-4 p-8 space-y-8'>
        <h1 className='text-2xl font-bold text-black'>TOP CELLPHONES AND TABLETS</h1>

        <div className="grid grid-cols-3 gap-2">

            <div className='col-span-2 rounded-md bg-[url("/images/headphone-bg.png")] bg-cover px-10'>
                <div className='w-2/3 h-full flex flex-col p-8 justify-center space-y-4'>
                    <h1 className='text-3xl font-bold text-white'>Noise Cancelling</h1>
                    <h2 className='text-2xl font-normal text-white mb-4'>Headphones</h2>
                    <div className='text-white text-lg w-1/2 h-auto pl-4 mb-8'>
                        <p>Boss Over-Ear Headphone</p>
                        <p>wifi,voice assistant,</p>
                        <p>low latency Game Mode</p>
                    </div>
                    <div>
                        <button className='text-black bg-white py-2 px-4 rounded-md hover:bg-red-600'>Buy Now</button>
                    </div>
                </div>
            </div>

            <div className='col-span-1 h-full flex items-center bg-[url("/images/xiaomi_phones.png")] bg-cover bg-no-repeat rounded-md'>
                <div className='w-2/3 h-full flex flex-col space-y-4 py-8 pl-4'>
                    <h1 className='text-2xl font-bold'>Redmi Note 12 Pro+ 5G</h1>
                    <p className='text-gray-400'>Rise To The Challenge</p>
                    <div>
                        <button className='bg-black text-white text-sm font-semibold py-1 px-2 rounded-md'>SHOP NOW</button>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}
