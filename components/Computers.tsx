import React from 'react'
import ComputerCategory from './ComputerCategory'
import ProductCard from './ui/ProductCard'
import ProductList from './ProductList'

export default function Computers() {
  return (
    <div className='w-full h-185 rounded-md flex flex-col space-y-8 bg-white mt-4 px-12 py-4'>
            <ComputerCategory 
              category_name='BEST LAPTOPS & COMPUTERS'
              category_image='/images/macbook.png'
              carousel_title='MacBook 2 SuperCharge'
              carousel_subtitle='By M2'
              carousel_price={1199}
            />
            <hr />
            <ProductList>
                <ProductCard 
                  name='Pineapple MacBook Pro 2022 M1 / 512GB' 
                  shipping_fee={3.98} 
                  in_stock 
                  price={579}
                  just_in 
                  stock_left={140} 
                  image='/images/macbook_pineapple.png'
                />
                <ProductCard 
                  name='C&O Bluetooth Speaker' 
                  shipping_fee={2.98} 
                  in_stock 
                  price={979}
                  just_in 
                  stock_left={152} 
                  image='/images/bluetooth_speakers.png'
                />
                <ProductCard 
                  name='Gigaby Custom Case, i7/16GB RAM/ SSD 256GB' 
                  free_shipping
                  free_gift 
                  in_stock 
                  price={659} 
                  stock_left={5} 
                  image='/images/custom_computer_case.png'
                />
                <ProductCard 
                  name='BEOS PC Gaming Case' 
                  shipping_fee={2.98} 
                  in_stock 
                  discount
                  old_price={1619}
                  new_price={1239} 
                  stock_left={9} 
                  image='/images/gaming_pc_case.png'
                />
                <ProductCard 
                  name='MacBook All-in-one Computer M1' 
                  free_shipping 
                  in_stock 
                  price={1729}
                  stock_left={8} 
                  image='/images/macbook_monitor.png'
                />
            </ProductList>
        </div>
  )
}
