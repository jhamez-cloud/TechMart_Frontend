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
      <div className='w-full h-70 flex flex-col space-y-8'>
        <div className='w-full h-10 flex justify-between items-center'>
            <h1 className='text-xl font-bold'>{props.category_name}</h1>
            <a href="" className='text-xl font-semibold text-gray-400'>View All</a>
        </div>
        <div className='w-full h-60 flex space-x-4'>
          <div 
            className='w-1/2 h-full flex items-center bg-cover rounded-md'
            style={{
              backgroundImage:`url(${props.category_image})`,
              backgroundSize:"cover"
            }}
          >
          {/* background image */}
            <div className='w-1/3 h-full flex flex-col space-y-4 py-8 pl-8'>
              <h1 className='text-2xl font-bold'>{props.carousel_title}</h1>
              <p className='text-gray-400'>{props.carousel_description}</p>
              <div>
                <button className='bg-black text-white text-sm font-semibold py-1 px-2 rounded-md'>SHOP NOW</button>
              </div>
            </div>
          </div>
          <div className='w-1/2 h-full grid grid-cols-3 grid-rows-2 py-4 gap-x-8 gap-y-12'>
            <CategoryProduct
              title='iPhone (iOS)'
              image='/images/iOS_category.png'
              number={74}
            />
            <CategoryProduct
              title='Android'
              image='/images/android_category.png'
              number={35}
            />
            <CategoryProduct
              title='Samsung'
              image='/images/samsung_5G_category.png'
              number={12}
            />
            <CategoryProduct
              title='Gaming Phones'
              image='/images/gaming_category.png'
              number={9}
            />
            <CategoryProduct
              title='Xiaomi'
              image='/images/xiaomi_category.png'
              number={52}
            />
            <CategoryProduct
              title='Accessories'
              image='/images/accessories_category.png'
              number={29}
            />
          </div>
        </div>
      </div>
  )
}
