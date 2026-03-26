export interface ProductCardProps {
  id: number
  name: string
  image: string

  price?: number
  old_price?: number
  new_price?: number

  discount?: boolean
  just_in?: boolean

  free_shipping?: boolean
  shipping_fee?: number
  free_gift?: boolean

  in_stock?: boolean
  stock_left: number

  category?: "laptops" | "mobilephones" | "accessories"
}