'use client'
import React, { useContext, useState } from 'react'
import { BadgeCheck, BadgeX, ShoppingCart } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { Category } from '@/types'
import { CartContext } from '@/context'
import { CartProduct } from '@/types/cart'

interface Props{
    id?: number,
    name: string,
    image: string,
    price?: number,
    old_price?: number,
    new_price?: number,
    discount?: boolean,
    just_in?: boolean,
    free_shipping?: boolean,
    shipping_fee?: number,
    free_gift?: boolean,
    in_stock?: boolean | 'pre',  //chore:implementing for pre-order
    stock_left: number | null,
    category?: Category
}

export default function ProductCard(props: Props) {
  const router = useRouter()

  const context = useContext(CartContext)
  if (!context) throw new Error("Cart Context Not Found")

  const { addToCart, removeFromCart, orders } = context

  const isInCart = (id: number | undefined) => {
    if (id == null) return false
    return orders.some(item => item.id === id)
  }

  const toggleCart = (product: CartProduct | undefined) => {
    if (!product || product.id == null) return

    if (isInCart(product.id)) {
      removeFromCart(product.id)
    } else {
      addToCart(product)
    }
  }

  const handleClick = () => {
    router.push(`/product_detail/${props.category?.slug}/${props.id}`)
    console.log("The Category of selected product: " , props.category)
    console.log("The base id of selected product" , props.id)
  }

  return (
    <div
      className='
        relative w-full bg-white p-4 rounded-md
        border border-transparent
        hover:border-gray-200
        hover:shadow-md
        hover:-translate-y-1
        transition-all duration-300 ease-in-out
        grid grid-rows-[auto_1fr_auto_auto_auto_auto] gap-2
        hover:cursor-pointer
      '
    >
      {/* BADGE */}
      {(props.discount || props.just_in) && (
        <span className={`
          absolute top-1 left-1 px-2 py-1 rounded-md text-white text-xs whitespace-pre-line
          ${props.discount ? 'bg-green-400' : 'bg-black'}
        `}>
          {props.discount ? `SAVE \n $${props.old_price! - props.new_price!}` : 'NEW'}
        </span>
      )}

      {/* CART ICON */}
      <span
        //onClick={()=>toggleCart({id: props.id!,quantity: 1})}
        className={`
          absolute top-1 right-1
          w-9 h-9 flex items-center justify-center
          rounded-full cursor-pointer
          transition-all duration-200
          ${isInCart(props.id)
            ? 'bg-green-100 hover:bg-green-200'
            : 'bg-gray-200 hover:bg-gray-300'}
        `}
      >
        <ShoppingCart 
          size={16} 
          className={`transition-colors duration-200 ${
          isInCart(props.id) ? 'text-green-600' : 'text-gray-800'
          }`} 
        />
      </span>

      {/* IMAGE */}
      <figure className='flex flex-col items-center row-start-1' onClick={handleClick}>
        <img className='h-32 object-contain' src={props.image} alt={props.name} />
        <figcaption className='w-full text-center'>
          <span className='text-gray-400 text-xs'>({props.stock_left})</span>
          <h1 
            className='text-sm md:text-base font-semibold'
          >
            {props.name}
            </h1>
        </figcaption>
      </figure>

      {/* PRICE */}
      <div className='flex justify-center gap-2 row-start-2'>
        {props.discount ? (
          <>
            <p className='text-red-500 font-bold md:text-lg'>${props.new_price}</p>
            <p className='text-gray-500 line-through md:text-lg'>${props.old_price}</p>
          </>
        ) : (
          <p className='text-center font-bold text-sm md:text-lg'>${props.price}</p>
        )}
      </div>

      {/* TAGS */}
      <div className='flex flex-wrap gap-2 justify-center row-start-3'>
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
      <div className='flex justify-center row-start-4'>
        {props.in_stock ? (
          <div className='flex items-center space-x-1 text-xs'>
            <BadgeCheck size={14} color='green' />
            <p>In Stock</p>
          </div>
        ) : (
          <div className='flex items-center space-x-1 text-xs'>
            <BadgeX size={14} color='red' />
            <p>Out Of Stock</p>
          </div>
        )}
      </div>

      {/* BUY NOW BUTTON */}
      <button className='
        w-full py-2 rounded-md text-sm font-medium
        bg-green-800 text-white
        hover:bg-green-400
        active:scale-[0.98]
        transition
        row-start-5
      '>
        Buy Now
      </button>
    </div>
  )
}