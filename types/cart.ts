import React from "react"

export type CartContextType = {
  orders: CartProduct[],
  setOrders: React.Dispatch<React.SetStateAction<CartProduct[]>>,
  cartSize: number,
  addToCart: (product: CartProduct | undefined) => void,
  removeFromCart: (id: number | undefined) => void
}

export type CartProduct = {
    id?:number,
    color?:string,
    ram?:string | null,
    storage?:string | null,
    quantity?:number,
} 