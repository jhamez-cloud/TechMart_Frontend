import React from 'react'
import CategoryProduct from './ui/CategoryProduct'

export default function PopularCategories() {
  return (
    <div className='w-full h-70 rounded-xl bg-white p-8 space-y-12 flex flex-col mt-4'>
        <h1 className='text-2xl font-bold text-black'>POPULAR CATEGORIES</h1>
        <div className='w-full flex-1 grid grid-cols-5 gap-4'>
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
                title='High-End'
                image='/images/high_grade_laptops.png'
                number={55}
            />
            <CategoryProduct
                title='MacBook M1'
                image='/images/macbook_m1.png'
                number={32}
            />
        </div>
    </div>
  )
}
