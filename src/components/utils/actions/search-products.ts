import { products } from "@/data/products/products"
import type { ProductCardProps } from "@/types/interfaces/product-card-props"


export async function searchProducts(query: string): Promise<ProductCardProps[]> {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 300))

    // For now, we'll filter the local products data
    const normalizedQuery = query.toLowerCase().trim()

    return products.filter(
        (product: ProductCardProps) =>
            product.name.toLowerCase().includes(normalizedQuery) ||
            product.category.toLowerCase().includes(normalizedQuery) ||
            product.description.toLowerCase().includes(normalizedQuery),
    )
}

