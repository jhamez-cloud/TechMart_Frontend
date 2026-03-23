import React from 'react'

interface Props{
    image:string,
    name:string,
    quantity:number
}

export default function GadgetCategory(props:Props) {
  return (
    <div className='w-full h-full flex flex-col space-y-2 items-center'>
      <div className='w-full h-3/4 flex justify-center items-center'>
        <img className='max-w-full max-h-full object-contain' src={props.image} alt={props.name} />
      </div>
      <div className='w-full h-1/3 flex flex-col items-center'>
        <h1 className='text-lg font-bold text-black text-center'>{props.name}</h1>
        <p className='font-light text-gray-400 text-center'>{props.quantity} Items</p>
      </div>
    </div>
  )
}