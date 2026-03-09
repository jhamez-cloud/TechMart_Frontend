import React from 'react'
import GadgetCategory from './GadgetCategory'

interface Props{
    title:string,
    image:string,
    description:string,
    subdescription?:string,
    children:React.ReactNode
}

export default function GadgetCard(props:Props) {

    const isOffice = props.title === "OFFICE EQUIPMENTS"
    const isGaming = props.title === "GAMING"

  return (
    <div className='w-full h-full flex flex-col space-y-8 rounded-md p-8 bg-white'>
        <div className='w-full h-10 flex justify-between items-center'>
            <h1 className='text-xl font-bold'>{props.title}</h1>
            <a href="" className='text-xl font-semibold text-gray-400'>View All</a>
        </div>
        <div 
            className='w-full h-60 flex items-center bg-cover rounded-md'
            style={{
              backgroundImage:`url(${props.image})`,
              backgroundSize:"cover"
            }}
          >
          {/* background image */}
            <div className={`w-1/4 h-full flex flex-col space-y-4 py-8 px-8 
                ${isOffice ? 'w-full h-1/2' : isGaming ? 'text-sm w-[43%]' : ''}`}
            >
                {
                !isOffice ? (
                    <p className={`text-xl font-semibold ${isGaming ? 'text-black' : 'text-white'}`}>
                    {props.description}
                    </p>
                ) : (
                    <div className='w-full h-full flex flex-col items-center pt-4'>
                        <p className='text-sm font-light text-gray-200'>{props.description}</p>
                        <p className='text-2xl font-bold text-white'>{props.subdescription}</p>
                    </div>
                )
                }
            </div>
        </div>
        <hr />
        <div className='w-[98%] h-90 grid grid-cols-2 grid-rows-2 gap-y-8 gap-x-8'>
            {props.children}
        </div>
    </div>
  )
}
