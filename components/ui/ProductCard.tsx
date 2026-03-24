import React from 'react'
import { BadgeCheck,BadgeX,ShoppingCart } from 'lucide-react'

interface Props{
    name:string,
    image:string,
    price?:number,
    old_price?:number,
    new_price?:number,
    discount?:boolean,
    just_in?:boolean,
    free_shipping?:boolean,
    shipping_fee?:number,
    free_gift?:boolean,
    in_stock?:boolean | 'pre'
    stock_left:number | null
}

export default function ProductCard (props:Props) {
  return (
    <div className='relative w-full bg-white p-4 rounded-md'>

      {/* BADGE */}
      {(props.discount || props.just_in) && (
        <span className={`
          absolute -top-2 -left-2 px-2 py-1 rounded-md text-white text-xs whitespace-pre-line
          ${props.discount ? 'bg-green-400' : 'bg-black'}
        `}>
          {props.discount
            ? `SAVE \n $${props.old_price! - props.new_price!}`
            : 'NEW'}
        </span>
      )}

      {/* CART ICON */}
      <span className='absolute w-8 h-8 flex justify-center items-center bg-gray-200 -top-2 right-2 rounded-full'>
        <ShoppingCart size={16} />
      </span>

      <div className='flex flex-col space-y-2'>

        {/* IMAGE */}
        <figure className='flex flex-col items-center'>
          <img className='h-32 object-contain' src={props.image} alt={props.name} />

          <figcaption className='w-full text-center'>
            <span className='text-gray-400 text-xs'>({props.stock_left})</span>
            <h1 className='text-sm md:text-base font-semibold'>{props.name}</h1>
          </figcaption>
        </figure>

        {/* PRICE */}
        <div>
          {props.discount ? (
            <div className='flex justify-center gap-2 flex-wrap'>
              <p className='text-red-500 font-bold md:text-lg'>
                ${props.new_price}
              </p>
              <p className='text-gray-500 line-through md:text-lg'>
                ${props.old_price}
              </p>
            </div>
          ) : (
            <p className='text-center font-bold text-sm md:text-lg'>
              ${props.price}
            </p>
          )}
        </div>

        {/* TAGS */}
        <div className='flex flex-wrap gap-2 justify-center'>
          <button className='p-1 bg-[#f1f9f2] text-green-400 text-xs rounded-md'>
            {props.free_shipping ? 'FREE SHIPPING' : `${props.shipping_fee} SHIPPING`}
          </button>

          {props.free_gift && (
            <button className='p-1 bg-[#f7efed] text-red-400 text-xs rounded-md'>
              FREE GIFT
            </button>
          )}
        </div>

        {/* STOCK */}
        <div className='flex justify-center'>
          {props.in_stock ? (
            <div className='flex items-center space-x-1 text-xs'>
              <BadgeCheck size={14} color='green'/>
              <p>In Stock</p>
            </div>
          ) : (
            <div className='flex items-center space-x-1 text-xs'>
              <BadgeX size={14} color='red'/>
              <p>Out Of Stock</p>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}