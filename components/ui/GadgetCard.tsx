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
        <div className='w-full flex flex-col space-y-4 md:space-y-8 rounded-md p-4 md:p-8 bg-white'>
            {/* HEADER */}
            <div className='w-full flex justify-between items-center mb-4'>
                <h1 className='text-xl font-bold'>{props.title}</h1>
                <a href="" className='text-sm md:text-xl font-semibold text-gray-400'>View All</a>
            </div>

            {/* IMAGE + DESCRIPTION */}
            <div className='w-full flex flex-col md:flex-col md:space-y-0 md:space-x-4 items-center'>
                <div 
                    className='w-full md:w-full h-48 md:h-50 flex items-center bg-cover rounded-md'
                    style={{
                        backgroundImage:`url(${props.image})`,
                        backgroundSize:"cover"
                    }}
                >
                    <div className={`w-full h-full flex flex-col justify-center space-y-2 p-4
                        ${isOffice ? 'items-center text-center' : ''}`}>
                        {!isOffice ? (
                            <p className={`text-xl font-semibold ${isGaming ? 'text-black' : 'md:text-white'}`}>
                                {props.description}
                            </p>
                        ) : (
                            <div className='flex flex-col items-center'>
                                <p className='text-sm font-light text-gray-200'>{props.description}</p>
                                <p className='text-2xl font-bold text-white'>{props.subdescription}</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* CHILD GRID */}
                <div className='w-full md:w-3/4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8'>
                    {props.children}
                </div>
            </div>
        </div>
    )
}