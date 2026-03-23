import React from 'react'
import CategoryProduct from './ui/CategoryProduct'

interface Props{
  category_name:string,
  category_image:string,
  carousel_title:string,
  carousel_description:string
}

export default function Category(props:Props) {
  return (
    <div className='w-full flex flex-col space-y-6'>

      {/* HEADER */}
      <div className='w-full flex justify-between items-center'>
        <h1 className='text-lg md:text-xl font-bold'>{props.category_name}</h1>
        <a href="" className='text-sm md:text-xl font-semibold text-gray-400'>View All</a>
      </div>

      {/* CONTENT */}
      <div className='w-full flex flex-col lg:flex-row gap-4'>

        {/* 🔥 LEFT IMAGE */}
        <div 
          className='w-full lg:w-1/2 min-h-50 flex items-center bg-cover rounded-md'
          style={{ backgroundImage:`url(${props.category_image})` }}
        >
          <div className='w-full lg:w-1/3 flex flex-col space-y-3 py-6 px-4 lg:pl-8'>
            <h1 className='text-lg md:text-2xl font-bold'>{props.carousel_title}</h1>
            <p className='text-gray-400 text-sm md:text-base'>
              {props.carousel_description}
            </p>
            <button className='bg-black text-white text-xs md:text-sm font-semibold py-1 px-3 rounded-md w-fit'>
              SHOP NOW
            </button>
          </div>
        </div>

        {/* 🔥 CATEGORY GRID */}
        <div className='w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-4 py-2'>

          <CategoryProduct title='iPhone (iOS)' image='/images/iOS_category.png' number={74}/>
          <CategoryProduct title='Android' image='/images/android_category.png' number={35}/>
          <CategoryProduct title='Samsung' image='/images/samsung_5G_category.png' number={12}/>
          <CategoryProduct title='Gaming Phones' image='/images/gaming_category.png' number={9}/>
          <CategoryProduct title='Xiaomi' image='/images/xiaomi_category.png' number={52}/>
          <CategoryProduct title='Accessories' image='/images/accessories_category.png' number={29}/>

        </div>

      </div>
    </div>
  )
}