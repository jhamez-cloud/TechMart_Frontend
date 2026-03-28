import React from 'react'
import ProductCard from './ui/ProductCard'
import { Carousel, CarouselItem } from "@/components/ui/carousel" // ShadCN carousel import
import useSWR from 'swr';
import { Product } from '@/types';
import ApiError from './ApiError';
import ApiLoading from './ApiLoading';

export default function BestSelling() {

  const Django_Url = process.env.NEXT_PUBLIC_DJANGO_URL;
  const { data: products, error: error } = useSWR<Product[]>(
    `${Django_Url}/api/v1/products/?best_selling=true`,
  );

  return (
    <div className='w-full px-4 md:px-8 py-4 rounded-md bg-white mt-4'>

      {/* HEADER */}
      <div className='w-full flex items-center justify-between mb-6 md:mb-8'>
        <div className='flex items-center space-x-3 md:space-x-4'>
          <h1 className='text-base md:text-sm font-semibold'>BEST SELLER</h1>
          <a href="" className='text-sm md:text-sm text-gray-400'>NEW IN</a>
          <a href="" className='text-sm md:text-sm text-gray-400'>POPULAR</a>
        </div>
        <a href="" className='text-sm md:text-lg font-mono text-gray-400'>View All</a>
      </div>

      {/* PRODUCTS */}
      <div className='w-full'>

        {/* MOBILE → ShadCN Carousel */}
        <div className='md:hidden'>
          <Carousel className='w-full'>
            
            <CarouselItem>
              <ProductCard 
                name='BOSO 2 Wireless On Ear Headphone' 
                free_gift free_shipping in_stock just_in
                price={350} stock_left={152} 
                image='/images/boso_headphone.png'
              />
            </CarouselItem>

            <CarouselItem>
              <ProductCard 
                name='iPad Pro 12.9 inch M1 2023, 64GB + WiFi, GPS' 
                old_price={759} new_price={569} 
                discount free_shipping in_stock  
                stock_left={152} 
                image='/images/ipad_pro.png'
              />
            </CarouselItem>

            <CarouselItem>
              <ProductCard 
                name='uLosk Mini Case 2.0' 
                discount old_price={2119} new_price={1729} 
                free_shipping stock_left={8} 
                image='/images/ulosk_minicase.png'
              />
            </CarouselItem>

            <CarouselItem>
              <ProductCard 
                name='Apple Watch Series 8 GPS' 
                shipping_fee={29} in_stock 
                price={979} stock_left={120} 
                image='/images/apple_watch.png'
              />
            </CarouselItem>

            <CarouselItem>
              <ProductCard 
                name='iSmart 24V Charger' 
                shipping_fee={3.98} in_stock discount
                old_price={12} new_price={9} 
                stock_left={140} 
                image='/images/ismart_charger.png'
              />
            </CarouselItem>

          </Carousel>
        </div>

        {/* DESKTOP → ORIGINAL GRID */}
        <div className='hidden md:block'>

            {error && <ApiError />}
            {!error && !products && <ApiLoading/>}
            {
              !error && products && 
              <div className='grid grid-cols-5 gap-4'>
                {products.map(product => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    image={product.image}
                    price={Number(product.variants?.[0]?.price)}
                    stock_left={product.variants?.[0]?.stock || 0}
                    in_stock={product.variants?.[0]?.stock > 0}
                    category={product.category}
                    free_shipping={product.free_shipping}
                    free_gift={product.free_gift}
                    shipping_fee={product.shipping_fee}
                    just_in={product.just_in}
                  />
                ))}
              </div>
            }
        </div>
      </div>

    </div>
  )
}