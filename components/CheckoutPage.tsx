'use client'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { InputGroup, InputGroupInput } from "@/components/ui/input-group"
import ApiError from "./ApiError"
import ApiLoading from "./ApiLoading"
import useSWR from "swr"
import { Product } from "@/types"
import { CartProduct } from "@/types/cart"
import CheckoutCard from "./ui/CheckoutCard"
import { useEffect, useState } from "react"

export default function CheckoutPage() {

  const [orders, setOrders] = useState<CartProduct[]>([])
  const [orderIds, setOrderIds] = useState<string>("")

  useEffect(() => {
    const data: CartProduct[] = JSON.parse(localStorage.getItem("orders") || "[]")
    
    setOrders(data)
    setOrderIds(data.map(order => order.id).join(','))
  }, [])

  const Django_Url = process.env.NEXT_PUBLIC_DJANGO_URL;

  const { data: products, error: error } = useSWR<Product[]>(
    `${Django_Url}/api/v1/products/?id_in=${orderIds}`,
  );
  
  if (error) return <ApiError />;
  if (!products) return <ApiLoading />;

  return (
    <div className="w-full min-h-120 rounded-md mt-4 bg-gray-100 p-4 md:p-10 flex justify-center">
      <div className="w-full max-w-7xl flex flex-col gap-6">

        {/* CHECKOUT HEADER + TOP ALERTS */}
        <div className="w-full flex flex-col gap-4">
          <h1 className="font-semibold text-lg">CHECKOUT</h1>

          {/* TOP ALERTS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-gray-200 rounded-lg p-4 text-sm">
              Returning customer?{" "}
              <span className="text-red-500 underline cursor-pointer">
                Click here to log in
              </span>
            </div>
            <div className="bg-gray-200 rounded-lg p-4 text-sm">
              Have a coupon?{" "}
              <span className="text-red-500 underline cursor-pointer">
                Click here to enter your code
              </span>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT: Your Order & Billing */}
        <div className="flex flex-col md:flex-row-reverse gap-6">

          {/* YOUR ORDER */}
          <div className="flex-1 space-y-6 order-1 md:order-2">

            <h2 className="font-semibold">Your Order</h2>

            <div className="bg-gray-100 rounded-xl p-6 space-y-6">
              <div className="flex justify-between text-sm font-semibold">
                <span>PRODUCT(S)</span>
                <span>SUB TOTAL</span>
              </div>

              <div className="flex flex-col gap-4 justify-between text-sm">
                {products.map((product) => {
                  const orderlist = orders.find((o)=>o.id === product.id) 
                  return <CheckoutCard
                    key={orderlist?.id}
                    name={product.name}
                    image={product.image}
                    price={1234}
                    quantity={orderlist?.quantity}
                  />
                })}
              </div>

              <div className="flex justify-between text-sm text-red-500">
                <span>Worldwide Standard Shipping Free</span>
                <span>+ $9.50</span>
              </div>

              <div className="flex justify-between font-semibold text-green-600">
                <span>Order Total</span>
                <span>$1,746.50</span>
              </div>
            </div>

            {/* PAYMENT */}
            <div className="bg-gray-100 rounded-xl p-6 space-y-4">
              <div className="flex items-start gap-2">
                <input type="radio" defaultChecked/>
                <div className="text-sm">
                  <p className="font-semibold">Direct Bank Transfer</p>
                  <p className="text-xs text-gray-500">
                    Make your payment directly into our bank account.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input type="radio"/>
                <span className="text-sm">Cash on Delivery</span>
              </div>

              <div className="flex items-center gap-2">
                <input type="radio"/>
                <span className="text-sm">Paypal</span>
              </div>

              <Button className="w-full bg-green-500 hover:bg-green-600">
                PLACE ORDER
              </Button>
            </div>
          </div>

          {/* BILLING DETAIL */}
          <div className="flex-1 space-y-6 order-2 md:order-1">

            <h2 className="font-semibold">Billing Detail</h2>

            {/* NAME */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputGroup>
                <InputGroupInput placeholder="First Name *"/>
              </InputGroup>
              <InputGroup>
                <InputGroupInput placeholder="Last Name *"/>
              </InputGroup>
            </div>

            <Input placeholder="Company Name (Optional)"/>

            {/* COUNTRY */}
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Country / Region"/>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Countries</SelectLabel>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Input placeholder="House number and street name"/>
            <Input placeholder="Apartment, suite, unit etc (Optional)"/>
            <Input placeholder="Town / City *"/>

            {/* STATE */}
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="State / County"/>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>States</SelectLabel>
                  <SelectItem value="washington">Washington</SelectItem>
                  <SelectItem value="california">California</SelectItem>
                  <SelectItem value="texas">Texas</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Input placeholder="Zip Code *"/>
            <Input placeholder="Phone Number *"/>
            <Input placeholder="Email Address *"/>

            <div className="flex items-center gap-2 text-sm">
              <input type="checkbox"/>
              <span>Create an account?</span>
            </div>

            {/* ADDITIONAL INFO */}
            <div className="space-y-2">
              <h3 className="font-semibold">Additional Information</h3>
              <textarea
                className="w-full border rounded-md p-3"
                rows={4}
                placeholder="Note about your order, e.g. special note for delivery"
              />
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}