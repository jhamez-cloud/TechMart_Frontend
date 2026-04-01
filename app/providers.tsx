"use client";
import React, { createContext, useEffect, useState } from "react";
import { SWRConfig } from "swr";
import { Product } from "@/types";
import { CartContext } from "@/context/context";
import { CartProduct } from "@/types/cart";

export const ApiProviders = ({ children }: { children: React.ReactNode }) => {
  const fetcher = async (url: string) => {
    const res = await fetch(url, { credentials: "include" });
    if (!res.ok) throw new Error("Fetch Data Request Failed...");
    const data = await res.json();

    console.log(data);
    return data;
  };

  return (
    <SWRConfig
      value={{
        fetcher,
        revalidateOnFocus: false,
        dedupingInterval: 1000,
      }}
    >
      {children}
    </SWRConfig>
  );
};

export const CartProviders = ({ children }: { children: React.ReactNode }) => {
  const [orders, setOrders] = useState<CartProduct[]>([]);

  useEffect(() => {
    try {
      const data = JSON.parse(localStorage.getItem("orders") || "[]");
      setOrders(data);
    } catch {
      setOrders([]);
    }
  }, []);

  const addToCart = (product: CartProduct | undefined) => {
    if (!product || !product.id || !product.productId) return;

    setOrders((prev) => {
      // find by productId + variant combination
      const index = prev.findIndex(
        (p) =>
          p.productId === product.productId &&
          p.id === product.id &&
          p.variant?.color === product.variant?.color &&
          p.variant?.ram === product.variant?.ram &&
          p.variant?.storage === product.variant?.storage
      );

      let updated: CartProduct[];

      if (index !== -1) {
        updated = [...prev];
        updated[index].quantity =
          (updated[index].quantity || 0) + (product.quantity || 0);
      } else {
        updated = [...prev, product];
      }

      localStorage.setItem("orders", JSON.stringify(updated));
      return updated;
    });
  };

  // Remove by productId + variantId
  const removeFromCart = (product: CartProduct | undefined) => {
    if (!product || !product.id || !product.productId) return;

    const updated = orders.filter(
      (item) =>
        !(
          item.productId === product.productId &&
          item.id === product.id &&
          item.variant?.color === product.variant?.color &&
          item.variant?.ram === product.variant?.ram &&
          item.variant?.storage === product.variant?.storage
        )
    );

    setOrders(updated);
    localStorage.setItem("orders", JSON.stringify(updated));
  };

  const cartSize = orders.reduce(
    (total, item) => total + (item.quantity || 0),
    0
  );

  return (
    <CartContext.Provider
      value={{ orders, setOrders, cartSize, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};