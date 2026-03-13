import React from 'react'
import NavBar from '@/components/NavBar'
import Breadcrumbs from '@/components/Breadcrumbs'
import Footer from '@/components/Footer'
import ProductPage from '@/components/ProductPage'
import ProductDescripton from '@/components/ProductDescripton'
import RecentlyViewed from '@/components/RecentlyViewed'
import RelatedProducts from '@/components/RelatedProducts'


export default function page() {
  return (
    <div className={`w-full min-h-screen`}>
        <div className="w-full h-full p-12 bg-gray-200">
            <NavBar/>
            <Breadcrumbs/>
            <ProductPage/>
            <ProductDescripton/>
            <RelatedProducts/>
            <RecentlyViewed/>
        </div>
        <Footer/>
    </div>
  )
}
