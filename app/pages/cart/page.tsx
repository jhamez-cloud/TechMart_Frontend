import React from 'react'
import NavBar from '@/components/NavBar'
import Breadcrumbs from '@/components/Breadcrumbs'
import Footer from '@/components/Footer'
import Orders from '@/components/Orders'

export default function page() {
  return (
    <div className={`w-full min-h-screen`}>
        <div className="w-full h-full p-12 bg-gray-200">
            <NavBar/>
            <Breadcrumbs/>
            <Orders/>
        </div>
        <Footer/>
    </div>
  )
}
