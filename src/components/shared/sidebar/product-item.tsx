import { Button } from "@/components/ui/button";
import { ProductCardProps } from "@/types/interfaces/product-card-props";
import { Trash2 } from "lucide-react";
import QuantitySelector from "../quantity-selector";
import useCardStore from "@/store/card-store"; // подключаем стор

export default function ProductItem({
  product,
}: {
  product: ProductCardProps;
}) {
  const { id, name, price } = product;
  const { removeFromCard } = useCardStore(); // вызываем функцию удаления

  return (
    <div className="flex items-center justify-between py-4">
      <div>
        <h3 className="text-sm font-medium text-white">{name}</h3>
        <p className="text-sm text-white/60">${price.toFixed(2)}</p>
      </div>
      <div className="flex items-center space-x-2">
        <QuantitySelector product={product} />
        <Button
          variant="outline"
          size="icon"
          onClick={() => removeFromCard(id)}
        >
          <Trash2 className="h-4 w-4" />
          <span className="sr-only">Remove item</span>
        </Button>
      </div>
    </div>
  );
}
