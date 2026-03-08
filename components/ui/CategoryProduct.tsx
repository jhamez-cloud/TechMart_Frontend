import React from 'react'

interface Props{
  image:string,
  title:string,
  number:number
}

export default function CategoryProduct(props:Props) {
  return (
    <div className='w-full h-full'>
        <figure className='w-full flex flex-row-reverse px-4 justify-between items-center'>
          <img src={props.image} alt={props.title} />
          <figcaption>
            <h1 className='font-bold text-black'>{props.title}</h1>
            <p className='text-gray-400 font-semibold'>{props.number} items</p>
          </figcaption>
        </figure>
    </div>
  )
}
