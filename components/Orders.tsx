import React from 'react'
import OrderCard from './ui/OrderCard'
import { Button } from './ui/button'

export default function Orders() {
  return (
    <div className='w-full min-h-120 rounded-md bg-white px-12 py-10 mt-4 grid grid-cols-3 gap-8'>
      <div className='w-full h-full col-span-2 space-y-2'>
        <OrderCard 
            name='GROK Smartphone 128GB, OLED Retina' 
            shipping_fee={3.98} 
            in_stock 
            discount
            old_price={850}
            new_price={579} 
            stock_left={140} 
            image='/images/grok_smartphone.png'
        />
        <OrderCard 
            name='GROK Smartphone 128GB, OLED Retina' 
            shipping_fee={3.98} 
            in_stock 
            discount
            old_price={850}
            new_price={579} 
            stock_left={140} 
            image='/images/grok_smartphone.png'
        />
        <OrderCard 
            name='GROK Smartphone 128GB, OLED Retina' 
            shipping_fee={3.98} 
            in_stock 
            discount
            old_price={850}
            new_price={579} 
            stock_left={140} 
            image='/images/grok_smartphone.png'
        />
        <OrderCard 
            name='GROK Smartphone 128GB, OLED Retina' 
            shipping_fee={3.98} 
            in_stock 
            discount
            old_price={850}
            new_price={579} 
            stock_left={140} 
            image='/images/grok_smartphone.png'
        />
      </div>
      <div className='w-full h-full flex items-end justify-center'>
        <div className='w-9/10 h-90 border-2 border-[#1A1b] rounded-md p-6 flex flex-col space-y-4'>
            <h1 className='text-lg font-medium text-black'>Order Summary</h1>
            <div className='w-full flex flex-col space-y-4'>
                <div className='w-full border-b border-gray-400 p-2 flex justify-between'>
                    <span className='text-gray-400 font-normal'>Sub Total:</span><span className='font-semibold text-black'>$1,000.00</span>
                </div>
                <div className='w-full border-b border-gray-400 p-2 flex justify-between'>
                    <span className='text-gray-400 font-normal'>Shipping Estimate:</span><span className='font-semibold text-black'>$30.00</span>
                </div>
                <div className='w-full border-b border-gray-400 p-2 flex justify-between'>
                    <span className='text-gray-400 font-normal'>Tax Estimate:</span><span className='font-semibold text-black'>$60.00</span>
                </div>
                <div className='w-full font-bold p-2 flex justify-between'>
                    <span className='text-sm text-black'>ORDER TOTAL:</span><span className='text-black'>$1090.00</span>
                </div>
            </div>
            <div className='w-full'>
                <Button className='bg-[#1A1]'>
                    CHECKOUT
                </Button>
            </div>
        </div>
      </div>
    </div>
  )
}
