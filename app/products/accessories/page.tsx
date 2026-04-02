import React from 'react'
import NavBar from '@/components/NavBar'
import Breadcrumbs from '@/components/Breadcrumbs'
import Footer from '@/components/Footer'
import ApiError from '@/components/ApiError'

export default function page() {
  return (
    <div className={`w-full min-h-screen`}>
        <div className="w-full h-full p-12 py-10 bg-gray-200">
            <NavBar/>
            <Breadcrumbs
              parent1='Products'
              parent2='Accessories'
            />
            <ApiError/>
        </div>
        <Footer/>
    </div>
  )
}
