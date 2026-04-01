import React from 'react'
import Image from 'next/image'

interface Props {
    id:number,
    image:string,
    name:string,
    quantity?:number,
    price:number,
}

export default function CheckoutCard(props:Props) {
  return (
    <div>
        <div className="flex gap-3 items-center">
        <Image width={60} height={60} src={props.image} alt={props.name} className='rounded' unoptimized></Image>
        <div>
            <p className='font-medium'>{props.name}</p>
            <p className="text-sm text-gray-500">x {props.quantity}</p>
        </div>
        </div>
        <span>${props.price}</span>
    </div>
  )
}
