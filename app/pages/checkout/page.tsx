import React from 'react'
import NavBar from '@/components/NavBar'
import Breadcrumbs from '@/components/Breadcrumbs'
import CheckoutPage from '@/components/CheckoutPage'
import Footer from '@/components/Footer'

export default function page() {
  return (
    <div className={`w-full min-h-screen`}>
        <div className="w-full h-full p-12 bg-gray-200">
            <NavBar/>
            <Breadcrumbs
              parent1='Pages'
              parent2='Checkout'
            />
            <CheckoutPage/>
        </div>
        <Footer/>
    </div>
  )
}
