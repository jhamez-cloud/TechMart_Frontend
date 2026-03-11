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

export default function CheckoutPage() {

  return (
    <div className="w-full min-h-120 rounded-md mt-4 bg-gray-100 p-10 flex justify-center">

      <div className="w-full max-w-7xl">

        <h1 className="font-semibold text-lg mb-6">CHECKOUT</h1>

        {/* TOP ALERTS */}

        <div className="grid grid-cols-2 gap-6 mb-8">

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

        <div className="grid grid-cols-3 gap-10">

          {/* LEFT FORM */}

          <div className="col-span-2 space-y-6">

            <h2 className="font-semibold">Billing Detail</h2>

            {/* NAME */}

            <div className="grid grid-cols-2 gap-4">

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

            {/* ADDRESS */}

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

          {/* RIGHT ORDER */}

          <div className="space-y-6">

            <h2 className="font-semibold">Your Order</h2>

            <div className="bg-gray-100 rounded-xl p-6 space-y-4">

              <div className="flex justify-between text-sm font-semibold">
                <span>PRODUCT(S)</span>
                <span>SUB TOTAL</span>
              </div>

              <div className="flex justify-between text-sm">

                <div className="flex gap-3 items-center">

                  <div className="w-10 h-10 bg-gray-300 rounded"/>

                  <div>
                    <p>Pineapple Macbook Pro 2022</p>
                    <p className="text-xs text-gray-500">x 3</p>
                  </div>

                </div>

                <span>$1,737.00</span>

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

        </div>

      </div>

    </div>
  )
}