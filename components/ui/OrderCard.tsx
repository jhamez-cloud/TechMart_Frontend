"use client";
import React, { useEffect, useState } from "react";
import { BadgeCheck, BadgeX, ShoppingCart, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";
import { useContext } from "react";
import { CartContext } from "@/context/context";
import { Category } from "@/types";
import { CartProduct } from "@/types/cart";

interface Props {
  id?: number;
  category: Category;
  name: string;
  image: string;
  price?: number;
  old_price?: number;
  new_price?: number;
  discount?: boolean;
  just_in?: boolean;
  free_shipping?: boolean;
  shipping_fee?: number;
  free_gift?: boolean;
  in_stock?: boolean | "pre";
  stock_left: number | null;
  order_quantity?: number;
  onRemove: () => void;
}

export default function OrderCard(props: Props) {

  return (
    <div className="relative w-full rounded-md border p-4 flex flex-col md:flex-row gap-4">
      {/* BADGES */}
      <span
        className={`
        ${props.discount || props.just_in ? "absolute top-2 left-2 px-2 py-1 rounded-md text-white text-xs" : "hidden"}
        ${props.discount ? "bg-green-400" : props.just_in ? "bg-black" : ""}
      `}
      >
        {props.discount
          ? `SAVE $${props.old_price! - props.new_price!}`
          : props.just_in
            ? "NEW"
            : null}
      </span>

      <span className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-white rounded-full">
        <BadgeX
          size={18}
          color="red"
          className="hover:cursor-pointer"
          onClick={props.onRemove}
        />
      </span>

      {/* IMAGE */}
      <div className="w-full md:w-1/4 flex justify-center items-center">
        <img
          src={props.image}
          alt={props.name}
          className=" object-contain "
          width={70}
          height={70}
        />
      </div>

      {/* CONTENT */}
      <div className="w-full md:w-3/4 flex flex-col gap-2">
        <span className="text-gray-400 text-xs">({props.stock_left})</span>

        <h1 className="font-semibold text-sm md:text-base">{props.name}</h1>

        {/* PRICE */}
        <div>
          {props.discount ? (
            <div className="flex items-center gap-2">
              <p className="text-lg font-bold text-red-500">
                ${props.new_price}
              </p>
              <p className="text-sm line-through text-gray-500">
                ${props.old_price}
              </p>
            </div>
          ) : (
            <p className="text-lg font-bold">${props.price}</p>
          )}
        </div>

        {/* QUANTITY */}
        <ButtonGroup>
              <Button
                variant="outline"
              >
                <Minus />
              </Button>
              <Input
                value={props.order_quantity}
                min={1}
                max={props.stock_left!}
                readOnly
                className="w-10 bg-white text-center"
              />
              <Button
                variant="outline"
              >
                <Plus />
              </Button>
            </ButtonGroup>

        {/* TAGS */}
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="p-1 bg-[#f1f9f2] text-green-400 rounded-md">
            {props.free_shipping
              ? "FREE SHIPPING"
              : `${props.shipping_fee} SHIPPING`}
          </span>

          {props.free_gift && (
            <span className="p-1 bg-[#f7efed] text-red-400 rounded-md">
              FREE GIFT
            </span>
          )}
        </div>

        {/* STOCK */}
        <div className="flex items-center gap-1 text-sm">
          {props.in_stock ? (
            <>
              <BadgeCheck size={16} color="green" />
              <p>In Stock</p>
            </>
          ) : (
            <>
              <BadgeX size={16} color="red" />
              <p>Out Of Stock</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
