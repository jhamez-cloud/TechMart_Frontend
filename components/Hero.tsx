import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Hero() {
  return (
    <div className='w-full'>

      {/* MOBILE VIEW */}
      <div className='flex flex-col space-y-4 lg:hidden mt-4'>

        {/* CATEGORIES */}
        <div className='bg-white rounded-md p-4'>
          <h1 className='text-xl font-semibold text-red-500 mb-2'>SALE 40% OFF</h1>

          <div className='grid grid-cols-2 gap-2 text-sm font-semibold'>
            <p>Laptops</p>
            <p>Smartphones</p>
            <p>PC & Computers</p>
            <p>Tablets</p>
            <p>Gaming & VR</p>
            <p>Networking</p>
            <p>Camera</p>
            <p>Sounds</p>
            <p>Accessories</p>
            <p>Monitors</p>
          </div>
        </div>

        {/* 🔥 CAROUSEL (MAIN HERO) */}
        <Carousel className="w-full">
          <CarouselContent>

            {/* SLIDE 1 */}
            <CarouselItem>
              <div className='h-64 rounded-md bg-[url("/images/headphone-bg.png")] bg-cover px-6 flex items-center'>
                <div className='text-white space-y-3'>
                  <h1 className='text-2xl font-bold'>Noise Cancelling</h1>
                  <h2 className='text-lg'>Headphones</h2>
                  <button className='text-black bg-white py-2 px-4 rounded-md hover:bg-red-600'>
                    Buy Now
                  </button>
                </div>
              </div>
            </CarouselItem>

            {/* SLIDE 2 */}
            <CarouselItem>
              <div className='h-64 rounded-md bg-[url("/images/hero-ps5.png")] bg-cover p-4 flex flex-col justify-between'>
                <div>
                  <p className='text-xl font-bold'>Sony PlayStation 5</p>
                  <p>From <span className='text-green-500'>$569</span></p>
                </div>
                <a href="" className='underline'>Discover Now</a>
              </div>
            </CarouselItem>

            {/* SLIDE 3 */}
            <CarouselItem>
              <div className='h-64 rounded-md bg-[url("/images/hero-keyboard.png")] bg-cover p-4 flex flex-col justify-between'>
                <div>
                  <p>Logitech Bluetooth</p>
                  <p className='text-yellow-300'>Keyboard</p>
                </div>
                <p>Best For All Devices</p>
              </div>
            </CarouselItem>

          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* STACKED SIDE CARDS */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>

          {/* WATCH */}
          <div className='rounded-md bg-[url("/images/hero-smartwatch.png")] bg-cover p-4 flex flex-col justify-between min-h-45'>
            <p>XOMIA</p>
            <h1 className='text-lg font-bold'>SPORTS WATER RESISTANCE WATCH</h1>
            <button className='bg-black text-white px-3 py-2 rounded-md hover:bg-red-600'>
              Shop Now
            </button>
          </div>

          {/* CAMERA */}
          <div className='rounded-md bg-[url("/images/hero-camera.png")] bg-cover p-4 flex flex-col justify-between min-h-45'>
            <div>
              <h1 className='text-white'>OKODO</h1>
              <p className='text-white'>HERO 11+ BLACK</p>
            </div>
            <div>
              <p className='text-gray-300'>From</p>
              <p className='text-green-400 text-xl'>$169</p>
            </div>
          </div>

        </div>

      </div>

      {/* DESKTOP VIEW (UNCHANGED STRUCTURE) */}
      <div className='hidden lg:grid w-full h-140 rounded-md mt-4 grid-cols-4 gap-4'>

        {/* LEFT CATEGORY */}
        <div className='px-5 py-3 bg-white rounded-md flex flex-col space-y-2'>
          <h1 className='text-xl font-semibold text-red-500 mb-2'>SALE 40% OFF</h1>
          <ul className='text-lg font-semibold flex flex-col space-y-2'>
            <li>Laptops</li>
            <li>Smartphones</li>
            <li>PC & Computers</li>
            <li>Tablets</li>
            <li>Gaming & VR</li>
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

        {/* CENTER */}
        <div className='col-span-2 grid grid-cols-2 gap-4'>

          <div className='col-span-2 rounded-md bg-[url("/images/headphone-bg.png")] bg-cover px-10'>
            <div className='w-2/3 h-full flex flex-col justify-center space-y-4'>
              <h1 className='text-3xl font-bold text-white'>Noise Cancelling</h1>
              <h2 className='text-2xl text-white'>Headphones</h2>

              <div className='text-white text-lg'>
                <p>Boss Over-Ear Headphone</p>
                <p>wifi,voice assistant,</p>
                <p>low latency Game Mode</p>
              </div>

              <button className='text-black bg-white py-2 px-4 rounded-md hover:bg-red-600'>
                Buy Now
              </button>
            </div>
          </div>

          <div className='rounded-md bg-[url("/images/hero-ps5.png")] bg-cover p-4 flex flex-col justify-between'>
            <div>
              <p className='text-xl font-bold'>Sony PlayStation 5</p>
              <p>From <span className='text-green-500'>$569</span></p>
            </div>
            <a href="" className='underline'>Discover Now</a>
          </div>

          <div className='rounded-md bg-[url("/images/hero-keyboard.png")] bg-cover p-4 flex flex-col justify-between'>
            <div>
              <p>Logitech Bluetooth</p>
              <p className='text-yellow-300'>Keyboard</p>
            </div>
            <p>Best For All Devices</p>
          </div>

        </div>

        {/* RIGHT */}
        <div className='grid grid-rows-2 gap-4'>

          <div className='rounded-md bg-[url("/images/hero-smartwatch.png")] bg-cover flex justify-end'>
            <div className='w-1/2 flex flex-col justify-around'>
              <p>XOMIA</p>
              <h1 className='text-xl font-bold'>SPORTS WATER RESISTANCE WATCH</h1>
              <button className='bg-black text-white px-4 py-2 rounded-md hover:bg-red-600'>
                Shop Now
              </button>
            </div>
          </div>

          <div className='rounded-md bg-[url("/images/hero-camera.png")] bg-cover p-4 flex flex-col justify-between'>
            <div>
              <h1 className='text-white'>OKODO</h1>
              <p className='text-white'>HERO 11+ BLACK</p>
            </div>
            <div>
              <p className='text-gray-300'>From</p>
              <p className='text-green-400 text-xl'>$169</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}