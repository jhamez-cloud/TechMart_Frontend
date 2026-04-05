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

import { Field,FieldDescription,FieldLabel } from "./ui/field"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { InputGroup, InputGroupInput } from "@/components/ui/input-group"
import ApiError from "./ApiError"
import ApiLoading from "./ApiLoading"
import useSWR from "swr"
import { Product } from "@/types"
import { CartProduct } from "@/types/cart"
import CheckoutCard from "./ui/CheckoutCard"
import { useEffect,useState,useContext } from "react"
import { CartContext } from "@/context/context"
import NoProduct from "./NoProduct"
import { useAuth } from "@/context/AuthContext"
import { createOrder } from "@/lib/api"
import useSWRMutation from "swr/mutation"
import { compare } from "swr/_internal"
import { CompassIcon } from "lucide-react"

type OrderPayload = {
  firebase_uid: string;
  total_price: number;
  items: {
    product_id: number;
    variant_id: number;
    color: string;
    ram: string;
    storage: string;
    quantity: number;
    price: number;
  }[];
  shipping: {
    first_name: string;
    last_name: string;
    company: string;
    address: string;
    apartment: string;
    city: string;
    phone: string;
    email: string;
    additional_info: string;
  };
};

export default function CheckoutPage() {

  const shipping_fee = 9.5

  const context = useContext(CartContext);
  if (!context) throw new Error("Cart Context Not Available");

  const { orders, removeFromCart } = context;
  const {currentUser, loading} = useAuth()

  const orderProductIds = orders.map((o) => o.id).join(",");
  
  /*if (!orders.length) {
    return (
      <div className="w-full mt-4">
        <NoProduct />
      </div>
    );
  }*/

  const Django_Url = process.env.NEXT_PUBLIC_DJANGO_URL;

  const { data: products, error } = useSWR<Product[]>(
    orderProductIds
      ? `${Django_Url}/api/v1/products/?id_in=${orderProductIds}`
      : null
  );

  const subtotal = orders.reduce((total, order) => {
    return total + (order.variant.price! * order.quantity!)
  }, 0)

  const shippingFees = products?.map((p)=>p.shipping_fee)
  //console.log(shippingFees)
  const totalshippingFee = shippingFees?.reduce((total,fee)=>{
    return total + fee
  })

  const total = subtotal + shipping_fee + totalshippingFee!

  const cart = JSON.parse(localStorage.getItem("orders") || "[]") as CartProduct[]
  const items = cart.map((item: any) => ({
    product_id: item.productId,
    variant_id: item.id,
    color: item.variant.color,
    ram: item.variant.ram,
    storage: item.variant.storage,
    price: item.variant.price,
    quantity: item.quantity,
  }));

  const [formData,setFormData] = useState({
    firstname:"",
    lastname:"",
    company:"",
    address:"",
    apartment:"",
    city:"",
    phone:"",
    email:"",
    additionalInfo:"",
  })

  const { trigger,isMutating } = useSWRMutation<any,any,string,OrderPayload>(`${Django_Url}/api/v1/orders/`,createOrder);

  const handlePurchase = async () => {

    const payload = {
      firebase_uid: currentUser.uid || "testing ID",
      total_price: total,
      items,
      shipping: {
        first_name: formData.firstname,
        last_name: formData.lastname,
        address: formData.address,
        apartment: formData.apartment || "",
        company: formData.company || "",
        city: formData.city,
        phone: formData.phone,
        email: formData.email,
        additional_info: formData.additionalInfo,
      },
    };

    await trigger(payload);
    //localStorage.removeItem("cart");
};

  
  //if (error) return <ApiError />;
  //if (!products) return <ApiLoading />;

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
        <div className="flex flex-col-reverse md:flex-row gap-6">

          {/* YOUR ORDER */}
          <div className="flex-1 space-y-6 order-1 md:order-2">

            <h2 className="font-semibold">Your Order</h2>

            <div className="bg-gray-100 rounded-xl p-6 space-y-6">
              <div className="flex justify-between text-sm font-semibold">
                <span>PRODUCT(S)</span>
                <span>SUB TOTAL</span>
              </div>

              <div className="flex flex-col gap-4 justify-between text-sm">
                {error && <ApiError/>}
                {!orders.length && <NoProduct/>}
                {orders.map((order) => {
                  // find product that contains this variant
                  const product = products?.find((p) =>
                    p.variants?.some((v) => v.id === order.id)
                  );
                  if (!product) return null;

                  // find the specific variant
                  const selectedVariant = product.variants?.find((v) => v.id === order.id);
                  if (!selectedVariant) return null;

                  return <CheckoutCard
                    key={order.id}
                    id={order.id!}
                    name={product.name}
                    image={selectedVariant.image!}
                    price={Number(selectedVariant.price!)}
                    quantity={order.quantity}
                  />
                })}
              </div>

              {products &&  
                <>
                  <div className="flex justify-between text-sm text-red-500">
                    <span>Worldwide Standard Shipping Free</span>
                    <span>+ $9.50</span>
                  </div>

                  <div className="flex justify-between font-semibold text-green-600">
                    <span>Order Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </>
              } 
            </div>

            {/* PAYMENT */}
            <div className="bg-gray-100 rounded-xl p-6 space-y-4">
              <div className="flex items-start gap-2">
                <input type="radio" id="paymentMthd" defaultChecked/>
                <div className="text-sm">
                  <p className="font-semibold">Direct Bank Transfer</p>
                  <p className="text-xs text-gray-500">
                    Make your payment directly into our bank account.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input type="radio" id="paymentMthd"/>
                <span className="text-sm">Cash on Delivery</span>
              </div>

              <div className="flex items-center gap-2">
                <input type="radio" id="paymentMthd"/>
                <span className="text-sm">Paypal</span>
              </div>

              <Button className="w-full bg-green-500 hover:bg-green-600" onClick={handlePurchase} disabled={isMutating}>
                {isMutating ? "Processing..." : "PLACE ORDER"}
              </Button>
            </div>
          </div>

          {/* BILLING DETAIL */}
          <div className="flex-1 space-y-6 order-2 md:order-1">

            <h2 className="font-semibold">Billing & Delivery Details</h2>

            {/* NAME */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputGroup>
                <InputGroupInput 
                  placeholder="First Name *" 
                  value={formData.firstname} 
                  onChange={(e)=>setFormData({...formData,firstname:e.target.value})}
                />
              </InputGroup>
              <InputGroup>
                <InputGroupInput 
                  placeholder="Last Name *" 
                  value={formData.lastname} 
                  onChange={(e)=>setFormData({...formData,lastname:e.target.value})}
                />
              </InputGroup>
            </div>

            <Input 
              placeholder="Company Name (Optional)"
              value={formData.company}
              onChange={(e)=>setFormData({...formData,company:e.target.value})}
             />

            <Input 
              placeholder="House number and street name"
              value={formData.address}
              onChange={(e)=>setFormData({...formData,address:e.target.value})}
            />
            <Input 
              placeholder="Apartment, suite, unit etc (Optional)"
              value={formData.apartment}
              onChange={(e)=>setFormData({...formData,apartment:e.target.value})}
            />
            <Input 
              placeholder="Town / City *"
              value={formData.city}
              onChange={(e)=>setFormData({...formData,city:e.target.value})}
            />

            <Field>
              <FieldLabel htmlFor="fieldgroup-phone">Phone Number</FieldLabel>
              <Input
                id="phonenumber"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e)=>setFormData({...formData,phone:e.target.value})}
                required
              />
              <FieldDescription>
                We&apos;ll contact you through this number.
              </FieldDescription>
            </Field>

            <Field>
              <FieldLabel htmlFor="fieldgroup-email">Email Address</FieldLabel>
              <Input
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e)=>setFormData({...formData,email:e.target.value})}
                required
              />
              <FieldDescription>
                We&apos;ll send updates to this address.
              </FieldDescription>
            </Field>

            {/* ADDITIONAL INFO */}
            <div className="space-y-2">
              <h3 className="font-semibold">Additional Information</h3>
              <textarea
                className="w-full border rounded-md p-3"
                rows={4}
                placeholder="Note about your order, e.g. special note for delivery"
                value={formData.additionalInfo}
                onChange={(e)=>setFormData({...formData,additionalInfo:e.target.value})}
              />
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}