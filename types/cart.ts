import React from "react"

export type CartContextType = {
  orders: CartProduct[],
  setOrders: React.Dispatch<React.SetStateAction<CartProduct[]>>,
  cartSize: number,
  addToCart: (product: CartProduct | undefined) => void,
  removeFromCart: (product: CartProduct | undefined) => void
}

export type CartProduct = {
    id?:number,
    productId?:number,
    variant:{color?:string,ram?:string | null,storage?:string | null,price?:number},
    quantity?:number,
} 