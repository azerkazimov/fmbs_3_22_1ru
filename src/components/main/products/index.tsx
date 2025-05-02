import ProductCard from "@/components/shared/product-card";
import { ProductCardProps } from "@/types/interfaces/product-card-props";
import { getTranslations } from "next-intl/server";

export default async function Products() {
  const response = await fetch(`${process.env.API_HOST}/api/products`);

  const product = await response.json();

  const t = await getTranslations("Home");

  return (
    <div className="flex flex-col gap-3">
      <h1 className="w-full text-center text-3xl ">{t("title")}</h1>
      <p className="w-full text-center text-lg">{t("description")}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {product.map((item: ProductCardProps) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
