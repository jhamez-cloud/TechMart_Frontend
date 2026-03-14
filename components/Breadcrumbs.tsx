import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

interface Props{
  parent1:string,
  parent2?:string,
  parent3?:string,
  parent4?:string
}

export default function Breadcrumbs(props:Props) {
  return (
    <div className='w-full h-16 bg-white rounded-md flex items-center mt-4 px-4'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/">{props.parent1}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          {
            props.parent2?
              <BreadcrumbItem>
                <BreadcrumbPage className='font-semibold'>{props.parent2}</BreadcrumbPage>
              </BreadcrumbItem>
            :props.parent3?
              <BreadcrumbItem>
                <BreadcrumbPage className='font-semibold'>{props.parent3}</BreadcrumbPage>
              </BreadcrumbItem>
            : <BreadcrumbItem>
                <BreadcrumbPage className='font-semibold'>{props.parent3}</BreadcrumbPage>
              </BreadcrumbItem>
          }
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}
