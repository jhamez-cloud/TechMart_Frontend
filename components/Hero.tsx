import React from 'react'

export default function Hero() {
  return (
    <div className='w-full h-130 grid grid-cols-4 gap-4 mb-4'>
        <div className='w-full h-full px-5 py-3 bg-white rounded-md mt-4 flex flex-col space-y-2'>
            <h1 className='text-xl font-semibold text-red-500 mb-2'>SALE 40% OFF</h1>
            <ul className='w-full h-full text-lg font-semibold flex flex-col space-y-2'>
                <li>Laptops</li>
                <li>Smartphones</li>
                <li>PC & Computers</li>
                <li>Tablets</li>
                <li>Gming & VR</li>
                <li>Networking</li>
                <li>Camera</li>
                <li>Sounds</li>
                <li>Office Equipment</li>
                <li>Storage, USB</li>
                <li>Accessories</li>
                <li>Monitors</li>
                <li>Clearance</li>
            </ul>
        </div>
        <div className='w-full h-full col-span-2 rounded-md mt-4 grid grid-cols-2 gap-4'>
            <div className='w-full h-full rounded-md col-span-2 bg-[url("/images/headphone-bg.png")] bg-cover px-10'>
                <div className='w-2/3 h-full flex flex-col justify-center space-y-4'>
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
            <div className='w-full h-full rounded-md bg-[url("/images/hero-ps5.png")] bg-cover flex flex-col justify-between py-4 pl-4'>
                <div>
                    <p className='text-xl font-bold'>Sony PlayStation 5</p>
                    <p className='text-lg font-normal'>From <span className='font-normal text-green-500'>%569</span></p>
                </div>
                <a href="" className='underline text-lg font-light'>Discover Now</a>
            </div>
            <div className='w-full h-full rounded-md bg-[url("/images/hero-keyboard.png")] bg-cover flex flex-col justify-between py-4 pl-4'>
                <div>
                    <p className='text-lg font-normal'>Logitech Bluetooth</p>
                    <p className='text-lg font-normal text-yellow-300'>Keyboard</p>
                </div>
                <p className='text-lg font-normal'>Best For All Devices</p>
            </div>
        </div>
        <div className='w-full h-full mt-4 grid grid-rows-2 gap-4'>
            <div className='w-full rounded-md bg-[url("/images/hero-smartwatch.png")] bg-cover flex justify-end'>
                <div className='w-1/2 h-full flex flex-col justify-around'>
                    <p className='text-lg font-light'>XOMIA</p>
                    <h1 className='text-2xl font-bold text-black'>SPORTS WATER RESISTANCE WATCH</h1>
                    <div>
                        <button className='text-white text-lg font-normal bg-black py-2 px-4 rounded-md hover:bg-red-600'>Shop Now</button>
                    </div>
                </div>
            </div>
            <div className='w-full rounded-md bg-[url("/images/hero-camera.png")] bg-cover'>
                <div className='w-1/2 h-full flex flex-col py-4 pl-8 justify-between'>
                    <div>
                        <h1 className='text-2xl font-semibold text-white'>OKODO</h1>
                        <h1 className='text-lg font-normal text-white'>HERO 11+</h1>
                        <h1 className='text-lg font-normal text-white'>BLACK</h1>
                    </div>
                    <div>
                        <p className='text-gray-500 font-medium text-lg'>From</p>
                        <p className='text-3xl font-semibold text-green-400'>$169</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
