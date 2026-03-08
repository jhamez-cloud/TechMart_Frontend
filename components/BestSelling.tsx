import React from 'react'
import ProductList from './ProductList'
import ProductCard from './ui/ProductCard'

export default function BestSelling() {
  return (
    <div className='w-full h-125 px-8 py-4 rounded-md bg-white mt-4'>
        <div className='w-full h-10 flex items-center justify-between space-x-6 mb-8'>
            <div className='flex items-center space-x-4'>
                <h1 className='text-xl font-semibold'>BEST SELLER</h1>
                <a href="" className='text-xl font-normal text-gray-400'>NEW IN</a>
                <a href="" className='text-xl font-normal text-gray-400'>POPULAR</a>
            </div>
            <a href="" className='text-lg font-mono text-gray-400'>View All</a>
        </div>
        <div className='w-full h-130 pl-6'>
            <ProductList>
                <ProductCard 
                    name='BOSO 2 Wireless On Ear Headphone' 
                    free_gift 
                    free_shipping 
                    in_stock 
                    just_in
                    price={350} 
                    stock_left={152} 
                    image='/images/boso_headphone.png'
                />
                <ProductCard 
                    name='iPad Pro 12.9 inch M1 2023, 64GB + WiFi, GPS' 
                    old_price={759}
                    new_price={569} 
                    discount
                    free_shipping 
                    in_stock  
                    stock_left={152} 
                    image='/images/ipad_pro.png'
                />
                <ProductCard 
                    name='uLosk Mini Case 2.0, Xenon i10 32GB / SSD 512 / VGA 8GB' 
                    discount
                    old_price={2119}
                    new_price={1729} 
                    free_shipping  
                    stock_left={8} 
                    image='/images/ulosk_minicase.png'
                />
                <ProductCard 
                    name='Apple Watch Series 8 GPS + Cellulose Stainless Steel Case with Milanese loop' 
                    shipping_fee={29}
                    in_stock 
                    price={979} 
                    stock_left={120} 
                    image='/images/apple_watch.png'
                />
                <ProductCard 
                    name='iSmart 24V Charger' 
                    shipping_fee={3.98} 
                    in_stock 
                    discount
                    old_price={12}
                    new_price={9} 
                    stock_left={140} 
                    image='/images/ismart_charger.png'
                />
            </ProductList>
        </div>
    </div>
  )
}
