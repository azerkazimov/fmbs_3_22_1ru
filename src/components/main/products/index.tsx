import ProductCard from "@/components/shared/product-card";
import { ProductCardProps } from "@/types/interfaces/product-card-props";

export default async function Products() {
  const response = await fetch(`${process.env.API_HOST}/api/products`);

  const product = await response.json();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {product.map((item: ProductCardProps) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}
