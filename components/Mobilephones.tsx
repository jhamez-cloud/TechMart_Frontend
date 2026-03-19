import React from 'react'
import Category from './MobileCategory'
import ProductList from './ProductList'
import ProductCard from './ui/ProductCard'
import useSWR from 'swr'

export default function Mobilephones() {

  const Django_URL = process.env.NEXT_PUBLIC_DJANGO_URL
  const {data:products,error:error} = useSWR(`${Django_URL}/api/v1/products`)

  return (
    <div className='w-full h-185 rounded-md flex flex-col space-y-8 bg-white mt-4 px-12 py-4'>
        <Category 
          category_name='TOP CELLPHONES & TABLETS'
          category_image='/images/xiaomi_phones.png'
          carousel_title='REDMI NOTE 12 PRO+ 5G'
          carousel_description='Rise To The Challenge'
        />
        <hr />
        <ProductList>
            <ProductCard 
              name='GROK Smartphone 128GB, OLED Retina' 
              shipping_fee={3.98} 
              in_stock 
              discount
              old_price={850}
              new_price={579} 
              stock_left={140} 
              image='/images/grok_smartphone.png'
            />
            <ProductCard 
              name='iPad Pro Tablet 2023 LTE + WiFi,GPS Cellulose 12.9 inch,512GB' 
              shipping_fee={2.98} 
              in_stock 
              price={979}
              just_in 
              stock_left={140} 
              image='/images/ipad_pro_tablet.png'
            />
            <ProductCard 
              name='Samsung s9 Plus, 128GB + 4GB RAM,GPS' 
              free_shipping
              free_gift 
              in_stock 
              price={659} 
              stock_left={140} 
              image='/images/samsung_s9_plus.png'
            />
            <ProductCard 
              name='Xiaomi Redmi Note 5,64GB' 
              free_shipping 
              in_stock 
              discount
              old_price={1619}
              new_price={1239} 
              stock_left={140} 
              image='/images/xiaomi_redmi_note.png'
            />
            <ProductCard 
              name='Microsoft Alpha Ultra S5 Surface 128GB 2022,Silver' 
              free_shipping 
              in_stock 
              price={1729}
              stock_left={140} 
              image='/images/microsoft_surface.png'
            />
        </ProductList>
    </div>
  )
}
