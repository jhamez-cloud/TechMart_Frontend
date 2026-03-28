'use client'
import React, { useCallback, useState } from 'react'
import NavBar from '@/components/NavBar'
import Breadcrumbs from '@/components/Breadcrumbs'
import Footer from '@/components/Footer'
import PhoneProductPage from '@/components/PhoneProductPage'
import ProductDescripton from '@/components/ProductDescripton'
import RecentlyViewed from '@/components/RecentlyViewed'
import RelatedProducts from '@/components/RelatedProducts'
import { useParams } from 'next/navigation'
import useSWR from 'swr'
import ApiError from '@/components/ApiError'
import ApiLoading from '@/components/ApiLoading'


export default function page() {
  
  const {id} = useParams()
  ///console.log("category is: ",category," and id is: ",id)

  const Django_Url = process.env.NEXT_PUBLIC_DJANGO_URL
  const {data:product,error:error} = useSWR(`${Django_Url}/api/v1/products/${id}`)

  if (error) return <ApiError/>;
  if (!product) return <ApiLoading/>;

  return (
    <div className={`w-full min-h-screen`}>
        <div className="w-full h-full p-12 bg-gray-200">
            <NavBar/>
            <Breadcrumbs
              parent1='Products Page'
              parent2={product.name}
            />
            <PhoneProductPage product={product}/>
            <ProductDescripton/>
            <RelatedProducts/>
            <RecentlyViewed/>
        </div>
        <Footer/>
    </div>
  )
}
