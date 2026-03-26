import { Product } from "./product"

export interface PaginatedResponse<T> {
  count: number
  next: string | null
  previous: string | null
  results: T[]
}

export type ProductListResponse = PaginatedResponse<Product>