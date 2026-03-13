import React from 'react'
import ProductCard from './ui/ProductCard'
import ProductList from './ProductList'

export default function RelatedProducts() {
  return (
    <div className='w-full min-h-100 p-8 bg-white rounded-md space-y-8 mt-4'>
        <h1 className='text-xl font-bold text-black'>RELATED PRODUCTS</h1>
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
