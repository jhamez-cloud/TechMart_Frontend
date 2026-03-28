import React from "react"

export type CartContextType = {
    cartSize : number,
    addToCart : (id:number | undefined) => void,
    removeFromCart : (id:number | undefined) => void,
    cartIds:number[],
    setCartIds:React.Dispatch<React.SetStateAction<number[]>>
} 