import React from 'react'
import { Button } from './button'

interface Props{
    image:string,
    title:string,
    description:string,
    link:string
}

export default function BrandCard(props:Props) {
  return (
    <div className='w-full h-full flex flex-col space-y-2'>
        <figure className='w-full space-y-1'>
            <img src={props.image} alt={props.title} className='rounded-md'/>
            <figcaption className='text-lg font-semibold text-black'>
                {props.title}
            </figcaption>
        </figure>
        <div className='w-full space-y-2'>
            <p className='text-gray-400 font-normal'>{props.description}</p>
            <button className='border border-green-400 text-green-400 bg-white rounded-md px-2 py-1'>
                <a href={props.link}>SHOP NOW</a>
            </button>
        </div>
    </div>
  )
}
