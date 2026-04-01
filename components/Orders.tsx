"use client";
import React, { useContext } from "react";
import OrderCard from "./ui/OrderCard";
import { Button } from "./ui/button";
import useSWR from "swr";
import ApiError from "./ApiError";
import { Product } from "@/types";
import { CartProduct } from "@/types/cart";
import { CartContext } from "@/context/context";
import { useState, useEffect } from "react";
import ApiLoading from "./ApiLoading";
import NoProduct from "./NoProduct";

export default function Orders() {
  const context = useContext(CartContext);
  if (!context) throw new Error("Cart Context Not Available");

  const { orders, removeFromCart } = context;

  const orderProductIds = orders.map((o) => o.id).join(",");

  if (!orders.length) {
    return (
      <div className="w-full mt-4">
        <NoProduct />
      </div>
    );
  }

  const Django_Url = process.env.NEXT_PUBLIC_DJANGO_URL;

  const { data: products, error } = useSWR<Product[]>(
    orderProductIds
      ? `${Django_Url}/api/v1/products/?id_in=${orderProductIds}`
      : null
  );

  useEffect(() => {
    console.log("orders:", orders);
    console.log("orderProductIds:", orderProductIds);
  }, [orders]);

  if (error) return <ApiError />;
  if (!products && !error) return <ApiLoading />;

  return (
    <div className="w-full min-h-120 rounded-md bg-white px-4 md:px-10 py-6 md:py-10 mt-4 flex flex-col gap-8">
      {/* STACK ON MOBILE, GRID ON DESKTOP */}
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8">
        {/* ORDER LIST */}
        <div className="w-full lg:col-span-2 space-y-4 order-2 lg:order-1">
          {error && <ApiError />}
          {!products && error && <ApiError />}
          {!orders.length && <NoProduct />}
          {orders.map((order) => {
            // find product that contains this variant
            const product = products?.find((p) =>
              p.variants?.some((v) => v.id === order.id)
            );
            if (!product) return null;

            // find the specific variant
            const selectedVariant = product.variants?.find((v) => v.id === order.id);
            if (!selectedVariant) return null;

            return (
              <OrderCard
                key={order.id}
                id={order.id} // variant id
                name={product.name}
                image={selectedVariant.image || product.image}
                discount={product.discount}
                old_price={Math.floor(Number(selectedVariant.price)/(1 - (product.discount_percentage/100)))}
                new_price={Number(selectedVariant.price)}
                price={Number(selectedVariant.price)}
                stock_left={selectedVariant.stock || 0}
                in_stock={selectedVariant.stock > 0}
                category={product.category}
                free_shipping={product.free_shipping}
                free_gift={product.free_gift}
                shipping_fee={product.shipping_fee}
                just_in={product.just_in}
                order_quantity={order.quantity}
                onRemove={() => removeFromCart(order)} // pass full order
              />
            );
          })}
          {/*<OrderCard 
            name='BOSO 2 Wireless On Ear Headphone' 
            free_gift 
            free_shipping 
            in_stock 
            just_in
            discount
            old_price={850}
            new_price={579}
            price={350} 
            stock_left={152} 
            image='/images/boso_headphone.png'
          />*/}
        </div>

        {/* ORDER SUMMARY → TOP ON MOBILE */}
        <div className="w-full flex justify-center order-1 lg:order-2">
          <div className="w-full max-w-md border rounded-md p-6 flex flex-col space-y-4">
            <h1 className="text-lg font-medium text-black">Order Summary</h1>

            <div className="flex flex-col space-y-3 text-sm">
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-400">Sub Total:</span>
                <span className="font-semibold">$1,000.00</span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-400">Shipping Estimate:</span>
                <span className="font-semibold">$30.00</span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-400">Tax Estimate:</span>
                <span className="font-semibold">$60.00</span>
              </div>

              <div className="flex justify-between font-bold pt-2">
                <span>ORDER TOTAL:</span>
                <span>$1090.00</span>
              </div>
            </div>

            <Button className="w-full bg-[#1A1]">
              <a href="/pages/checkout">GO TO CHECKOUT</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
