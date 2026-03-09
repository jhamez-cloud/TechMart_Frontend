import React from 'react'
import NavLink from './ui/NavLink'
import { Search,Heart,Activity } from 'lucide-react'
import { Input } from './ui/input'


export default function NavBar() {
  return (
    <div className={`w-full h-40`}>
        <div className={`h-2/3 w-full rounded-md bg-white px-4 py-2 flex flex-col`}>
            <div className='w-full h-1/4 flex justify-between text-xs'>
                <div className='w-full h-full flex space-x-4'>
                    <div className='pl-4 pr-1 rounded-sm bg-gray-200 font-normal flex items-center '>HotLine 24/7</div>
                    <p className='text-sm font-semibold'>{'(055)5530670'}</p>
                </div>
                <div className='w-full h-1/4 flex justify-end space-x-8'>
                    <div className='space-x-4 text-sm font-normal'>
                        <a href="" className='hover:text-green-700'>Sell On TechMart</a>
                        <a href="" className='hover:text-green-700'>Order Tracking</a>
                    </div>
                    <div className='space-x-2 text-sm font-normal'>
                        <select name="" id="">
                            <option value="">USD</option>
                            <option value="">GHS</option>
                            <option value="">CAD</option>
                        </select>
                        |
                        <select name="" id="">
                            <option value="">ENG</option>
                            <option value="">FR</option>
                            <option value="">RUS</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='w-full h-3/4 flex items-center'>
                <div className='w-1/4 h-full flex space-x-4 -ml-4 pt-4'>
                    <div className='w-10 h-10 rounded-xl p-2 m-2 bg-[#1ABA1A] flex items-center justify-center'>
                        <Activity className='mx-auto my-1' size={30} color='white'/>
                    </div>
                    <div>
                        <h1 className='font-bold text-xl'>TechMart</h1>
                        <p className='text-sm font-light'>The Best Tech Store</p>
                    </div>
                </div>
                <nav className='w-2/3 h-full'>
                    <ul className='flex space-x-4 w-full h-full items-center justify-start pt-4'>
                        <li className='font-semibold'>
                            <NavLink href='/'>HOME</NavLink>
                        </li>
                        <li className='font-semibold'>
                            <select name="" id="">
                                <option value="">
                                    <NavLink href='/Pages'>PAGES</NavLink>
                                </option>
                                <option value="">
                                    <NavLink href='/Pages'>PAGES</NavLink>
                                </option>
                                <option value="">
                                    <NavLink href='/Pages'>PAGES</NavLink>
                                </option>
                            </select>
                        </li>
                        <li className='font-semibold'>
                            <select name="" id="">
                                <option value="">
                                    <NavLink href='/Products'>PRODUCTS</NavLink>
                                </option>
                                <option value="">
                                    <NavLink href='/Products'>PRODUCTS  </NavLink>
                                </option>
                                <option value="">
                                    <NavLink href='/Products'>PRODUCTS</NavLink>
                                </option>
                            </select>
                        </li>
                        <li className='font-semibold'>
                            CONTACT
                        </li>
                    </ul>
                </nav>
                <div className='w-1/3 h-full flex items-center justify-between pr-4'>
                    <ul className='flex space-x-3'>
                        <li>
                            <div className='w-8 h-8 rounded-full bg-gray-200'></div>
                        </li>
                        <li>
                            <div className='w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center'>
                                <Heart className='mx-auto my-1' size={16}/>
                            </div>
                        </li>
                        <li>
                            <div className='w-8 h-8 rounded-full bg-gray-200'></div>
                        </li>
                    </ul>
                    <div className=''>
                        <p className='font-light text-sm'>Welcome</p>
                        <p className='font-medium text-sm'><a href="">Login</a>{'|'}<a href="">Register</a></p>
                    </div>
                    <div className='w-1/3 h-full flex space-x-2 items-center'>
                        <div className='w-8 h-8 rounded-full bg-gray-200'></div>
                        <div className=''>
                            <p className='font-light text-sm'>Cart</p>
                            <p className='font-medium text-sm'>{'$1234.90'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={`h-1/3 w-full flex items-center justify-between rounded-md bg-[#1aba1a]`}>
            <div className="w-1/4 h-8 bg-white rounded-xl p-2 m-4 flex items-center space-x-1">
                <select className='w-1/2 text-sm font-semibold'>
                        <option>All Categories</option>
                </select>
                <Input placeholder='Search for products' className='w-3/4 text-sm font-light'/>
                <div className='w-1/5 flex justify-end'>
                    <Search size={16}/>
                </div>
            </div>
            <ul className='text-white text-lg font-light w-2/4 h-full m-4 flex items-center justify-between'>
                <li>FREE SHIPPING OVER $199</li>
                <li>30 DAYS MONEY BACK</li>
                <li>100% SECURE PAYMENT</li>
            </ul>
        </div>
    </div>
  )
}
