export interface ProductCardProps {
  id: number
  name: string
  category: string
  description: string
  price: number
  image: string
  url: string,
  quantity:number
  discount?: number
}