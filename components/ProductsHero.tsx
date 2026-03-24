import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

export default function ProductsHero() {
  return (
    <div className='w-full bg-white rounded-xl mt-4 p-4 md:p-8 space-y-6 md:space-y-8'>

      <h1 className='text-xl md:text-2xl font-bold text-black'>
        TOP CELLPHONES AND TABLETS
      </h1>

      {/* MOBILE → CAROUSEL */}
      <div className='md:hidden'>
        <Carousel>
          <CarouselContent>

            {/* ITEM 1 */}
            <CarouselItem>
              <div className='rounded-md bg-[url("/images/headphone-bg.png")] bg-cover p-6 min-h-[220px] flex items-center'>
                <div className='w-full flex flex-col space-y-3'>
                  <h1 className='text-xl font-bold text-white'>Noise Cancelling</h1>
                  <h2 className='text-lg text-white'>Headphones</h2>

                  <div className='text-white text-sm'>
                    <p>Boss Over-Ear Headphone</p>
                    <p>wifi, voice assistant</p>
                    <p>low latency Game Mode</p>
                  </div>

                  <Button className='w-fit bg-white text-black hover:bg-red-600'>
                    Buy Now
                  </Button>
                </div>
              </div>
            </CarouselItem>

            {/* ITEM 2 */}
            <CarouselItem>
              <div className='rounded-md bg-[url("/images/xiaomi_phones_shop.png")] bg-cover p-6 min-h-[220px] flex items-center'>
                <div className='w-full flex flex-col space-y-3'>
                  <h1 className='text-lg font-bold text-black'>
                    Redmi Note 12 Pro+ 5G
                  </h1>
                  <p className='text-gray-300 text-sm'>Rise To The Challenge</p>

                  <Button size="sm" className='w-fit bg-black text-white'>
                    SHOP NOW
                  </Button>
                </div>
              </div>
            </CarouselItem>

          </CarouselContent>
        </Carousel>
      </div>

      {/* DESKTOP → ORIGINAL GRID */}
      <div className="hidden md:grid grid-cols-3 gap-4">

        <div className='col-span-2 rounded-md bg-[url("/images/headphone-bg.png")] bg-cover px-10'>
          <div className='w-2/3 h-full flex flex-col p-8 justify-center space-y-4'>
            <h1 className='text-3xl font-bold text-white'>Noise Cancelling</h1>
            <h2 className='text-2xl text-white'>Headphones</h2>

            <div className='text-white text-lg w-1/2 pl-4'>
              <p>Boss Over-Ear Headphone</p>
              <p>wifi,voice assistant</p>
              <p>low latency Game Mode</p>
            </div>

            <Button className='bg-white text-black w-fit hover:bg-red-600'>
              Buy Now
            </Button>
          </div>
        </div>

        <div className='flex items-center bg-[url("/images/xiaomi_phones_shop.png")] bg-cover rounded-md'>
          <div className='w-2/3 flex flex-col space-y-4 py-8 pl-4'>
            <h1 className='text-2xl font-bold'>
              Redmi Note 12 Pro+ 5G
            </h1>
            <p className='text-gray-400'>Rise To The Challenge</p>

            <Button size="sm" className='w-fit bg-black text-white'>
              SHOP NOW
            </Button>
          </div>
        </div>

      </div>
    </div>
  )
}