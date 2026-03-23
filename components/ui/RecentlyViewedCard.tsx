import React from 'react'
import { BadgeCheck,BadgeX,ShoppingCart} from 'lucide-react'

interface Props{
    name:string,
    image:string,
    price?:number,
    old_price?:number,
    new_price?:number,
    discount?:boolean,
    just_in?:boolean,
    free_shipping?:boolean,
    shipping_fee?:number,
    free_gift?:boolean,
    in_stock?:boolean | 'pre'
    stock_left:number | null
}

export default function RecentlyViewedCard (props:Props) {
  return (
        <div className='relative w-full h-full flex'>
            {/* BADGE */}
            {(props.discount || props.just_in) && (
            <span className={`
                absolute -top-2 -left-2 px-2 py-1 rounded-md text-white text-xs whitespace-pre-line
                ${props.discount ? 'bg-green-400' : 'bg-black'}
            `}>
                {props.discount
                ? `SAVE \n $${props.old_price! - props.new_price!}`
                : 'NEW'}
            </span>
            )}
    
            {/* CART ICON */}
            <span className='absolute w-8 h-8 flex justify-center items-center bg-gray-200 -top-2 right-2 rounded-full'>
                <ShoppingCart size={16} />
            </span>
            
            <div className='w-full flex justify-center space-y-2'>
                <figure className='w-1/4 h-full flex items-center'>
                    <img src={props.image} alt={props.name} />
                </figure>
                <div className='w-3/4 h-full flex flex-col space-y-1'> 
                    <div className='w-full pl-20'><span className='text-gray-400 font-light'>({props.stock_left})</span></div>
                    <h1 className='font-semibold text-black'>{props.name}</h1>
                    <div className='w-full flex space-x-2'>
                        {
                            props.discount
                            ?
                                <div className='w-full flex items-center space-x-2'>
                                    <p className='text-xl font-bold text-red-500 font-mono'>${props.new_price}.00</p>
                                    <p className='text-xl font-bold text-gray-500 font-mono line-through'>${props.old_price}.00</p>
                                </div>
                            :
                                <p className='text-xl font-bold text-black'>${props.price}.00</p>
                        }
                    </div>
                    <div className='flex flex-row space-x-2 items-center'>
                        <button className={`p-1 bg-[#f1f9f2] text-green-400 text-xs font-light rounded-md ${props.free_shipping ? 'text-green-400 ' : 'text-black'}`}>{props.free_shipping?'FREE SHIPPING':props.shipping_fee?.toString() + ' SHIPPING'}</button>
                        <button className={`${props.free_gift ? 'p-1 bg-[#f7efed] text-red-400 text-xs font-light rounded-md' : 'hidden'}`}>FREE GIFT</button>
                    </div>
                    <div className='w-full'>
                        {
                            props.in_stock
                            ?
                                <div className='w-full flex items-center space-x-1'>
                                    <BadgeCheck size={16} color='green'/>
                                    <p className='text-sm font-normal'>In Stock</p>
                                </div>
                            :
                                <div className='w-full flex items-center space-x-1'>
                                    <BadgeX size={16} color='red'/>
                                    <p className='text-sm font-normal'>Out Of Stock</p>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

