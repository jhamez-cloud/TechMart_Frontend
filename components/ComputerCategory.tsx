import React from 'react'
import CategoryProduct from './ui/CategoryProduct'

interface Props{
  category_name: string,
  category_image: string,
  carousel_title: string,
  carousel_subtitle: string,
  carousel_price: number
}

export default function ComputerCategory(props: Props) {
  return (
    <div className='w-full flex flex-col space-y-6'>

      {/* HEADER */}
      <div className='w-full flex justify-between items-center'>
        <h1 className='text-lg md:text-xl font-bold'>{props.category_name}</h1>
        <a href="" className='text-sm md:text-xl font-semibold text-gray-400'>View All</a>
      </div>

      {/* CONTENT */}
      <div className='w-full flex flex-col lg:flex-row gap-4'>

        {/* LEFT IMAGE */}
        <div
          className='w-full lg:w-1/2 min-h-50 flex items-center bg-cover rounded-md'
          style={{ backgroundImage: `url(${props.category_image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className='w-full lg:w-1/3 flex flex-col space-y-3 py-6 px-4 lg:pl-8 text-white'>
            <h1 className='text-lg md:text-2xl font-bold'>{props.carousel_title}</h1>
            <h2 className='text-base md:text-xl font-light'>{props.carousel_subtitle}</h2>
            <p className='text-sm md:text-base font-normal'>
              Start from <span className='text-green-400'>${props.carousel_price}</span>
            </p>
            <button className='bg-black text-white text-xs md:text-sm font-semibold py-1 px-3 rounded-md w-fit'>
              SHOP NOW
            </button>
          </div>
        </div>

        {/* CATEGORY GRID */}
        <div className='w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-4 py-2'>
          <CategoryProduct title='MacBook' image='/images/macbook_laptops.png' number={74} />
          <CategoryProduct title='Gaming Laptops' image='/images/gaming_pc.png' number={5} />
          <CategoryProduct title='Office Laptops' image='/images/office_laptops.png' number={22} />
          <CategoryProduct title='High-End' image='/images/high_grade_laptops.png' number={55} />
          <CategoryProduct title='MacBook M1' image='/images/macbook_m1.png' number={32} />
          <CategoryProduct title='Secondhand' image='/images/secondhand_laptops.png' number={18} />
        </div>

      </div>
    </div>
  )
}