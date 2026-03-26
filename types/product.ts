export interface Brand {
  id: number
  title: string
  brand_type: string
  slug: string
}

export interface Category {
  id: number
  title: string
  slug: string
  added_at: string
}

export interface ProductVariant {
  id: number
  color: string
  storage: string | null
  ram: string | null
  price: string
  stock: number
  image: string | null
  product: number
}

export interface ProductImage {
  id?: number
  sub_image: string
  alt_text?: string
}

export interface Product {
  id: number
  name: string
  slug: string
  description: string
  image: string

  category: Category
  brand: Brand

  condition: string
  created_at: string

  discount: boolean
  discount_percentage: number

  free_gift: boolean
  free_shipping: boolean
  just_in: boolean

  variants: ProductVariant[]
  images: ProductImage[]
}