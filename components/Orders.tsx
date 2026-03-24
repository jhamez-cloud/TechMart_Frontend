import React from 'react'
import OrderCard from './ui/OrderCard'
import { Button } from './ui/button'

export default function Orders() {
  return (
    <div className='w-full min-h-120 rounded-md bg-white px-4 md:px-10 py-6 md:py-10 mt-4 flex flex-col gap-8'>

      {/* STACK ON MOBILE, GRID ON DESKTOP */}
      <div className='flex flex-col lg:grid lg:grid-cols-3 gap-8'>

        {/* ORDER LIST */}
        <div className='w-full lg:col-span-2 space-y-4 order-2 lg:order-1'>
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
            name='Samsung s9 Plus, 128GB + 4GB RAM,GPS' 
            free_shipping
            free_gift 
            in_stock 
            price={659} 
            stock_left={140} 
            image='/images/samsung_s9_plus.png'
          />
          <OrderCard 
            name='Pineapple MacBook Pro 2022 M1 / 512GB' 
            shipping_fee={3.98} 
            in_stock 
            price={579}
            just_in 
            stock_left={140} 
            image='/images/macbook_pineapple.png'
          />
          <OrderCard 
            name='BOSO 2 Wireless On Ear Headphone' 
            free_gift 
            free_shipping 
            in_stock 
            just_in
            price={350} 
            stock_left={152} 
            image='/images/boso_headphone.png'
          />
        </div>

        {/* ORDER SUMMARY → TOP ON MOBILE */}
        <div className='w-full flex justify-center order-1 lg:order-2'>
          <div className='w-full max-w-md border rounded-md p-6 flex flex-col space-y-4'>

            <h1 className='text-lg font-medium text-black'>Order Summary</h1>

            <div className='flex flex-col space-y-3 text-sm'>
              <div className='flex justify-between border-b pb-2'>
                <span className='text-gray-400'>Sub Total:</span>
                <span className='font-semibold'>$1,000.00</span>
              </div>

              <div className='flex justify-between border-b pb-2'>
                <span className='text-gray-400'>Shipping Estimate:</span>
                <span className='font-semibold'>$30.00</span>
              </div>

              <div className='flex justify-between border-b pb-2'>
                <span className='text-gray-400'>Tax Estimate:</span>
                <span className='font-semibold'>$60.00</span>
              </div>

              <div className='flex justify-between font-bold pt-2'>
                <span>ORDER TOTAL:</span>
                <span>$1090.00</span>
              </div>
            </div>

            <Button className='w-full bg-[#1A1]'>
              CHECKOUT
            </Button>

          </div>
        </div>

      </div>

    </div>
  )
}