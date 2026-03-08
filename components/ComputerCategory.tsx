import React from 'react'
import CategoryProduct from './ui/CategoryProduct'

interface Props{
  category_name:string,
  category_image:string,
  carousel_title:string,
  carousel_subtitle:string,
  carousel_price:number
}

export default function ComputerCategory(props:Props) {
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
            <div className='w-1/3 h-full flex flex-col space-y-4 py-8 pl-8 text-white'>
              <h1 className='text-2xl font-bold'>{props.carousel_title}</h1>
              <h2 className='text-xl font-light'>{props.carousel_subtitle}</h2>
              <p className='text-sm font-normal'>Start from <span className='text-green-400'>${props.carousel_price}</span></p>
            </div>
          </div>
          <div className='w-1/2 h-full grid grid-cols-3 grid-rows-2 py-4 gap-x-8 gap-y-12'>
            <CategoryProduct
              title='MacBook'
              image='/images/macbook_laptops.png'
              number={74}
            />
            <CategoryProduct
              title='Gaming Laptops'
              image='/images/gaming_pc.png'
              number={5}
            />
            <CategoryProduct
              title='Office Laptops'
              image='/images/office_laptops.png'
              number={22}
            />
            <CategoryProduct
              title='High-End'
              image='/images/high_grade_laptops.png'
              number={55}
            />
            <CategoryProduct
              title='MacBook M1'
              image='/images/macbook_m1.png'
              number={32}
            />
            <CategoryProduct
              title='Secondhand'
              image='/images/secondhand_laptops.png'
              number={18}
            />
          </div>
        </div>
      </div>
  )
}
