'use client'
import React, { createContext, useState } from 'react'
import { SWRConfig } from 'swr'
import { Product } from '@/types'
import { CartContext } from '@/context'

export const ApiProviders = ({children}:{children:React.ReactNode}) => {

    const fetcher = async (url:string) => {
        const res = await fetch(url,{credentials:'include'})
        if(!res.ok)throw new Error ("Fetch Data Request Failed...")
        const data = await res.json()
        
        console.log(data)
        return data
    }

  return (
    <SWRConfig value={{
        fetcher,
        revalidateOnFocus:false,
        dedupingInterval:1000,
    }}>
      {children}
    </SWRConfig>
  )
}

export const CartProviders = ({children}:{children:React.ReactNode}) => {

  const [cartIds, setCartIds] = useState<number[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('Ids') || '[]')
    } catch {
      return []
    }
  })

  const cartSize = cartIds.length

  const addToCart = (id: number | undefined) => {
    if (id == null || cartIds.includes(id)) return // prevent undefined or duplicates

    const newCart = [...cartIds, id]
    setCartIds(newCart)
    localStorage.setItem('Ids', JSON.stringify(newCart))
  }

  const removeFromCart = (id: number | undefined) => {
    if (id == null) return

    const newCart = cartIds.filter(cartId => cartId !== id)
    setCartIds(newCart)
    localStorage.setItem('Ids', JSON.stringify(newCart))
  }

  return(
    <CartContext.Provider value={{cartIds,setCartIds,cartSize,addToCart,removeFromCart}}>
      {children}
    </CartContext.Provider>
  )
}
