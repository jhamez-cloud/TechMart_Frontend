import React from 'react'
import CategoryProduct from './ui/CategoryProduct'

export default function PopularCategories() {
  return (
    <div className='w-full h-70 rounded-xl bg-white p-8 space-y-12 flex flex-col mt-4'>
        <h1 className='text-2xl font-bold text-black'>POPULAR CATEGORIES</h1>
        <div className='w-full flex-1 grid grid-cols-5 gap-4'>
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
        </div>
    </div>
  )
}
