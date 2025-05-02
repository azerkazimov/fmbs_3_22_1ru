"use client";

import { Button } from "@/components/ui/button";
import QuantitySelector from "../quantity-selector";
import { ProductCardProps } from "@/types/interfaces/product-card-props";
import useCardStore from "@/store/card-store";

export default function CardAction({ product }: { product: ProductCardProps }) {
  const { addToCard } = useCardStore();
  const handleAddToCard = () => {
    addToCard(product);
  };
  return (
    <div className="flex flex-col gap-5">
      <QuantitySelector product={{ ...product }} />

      <div className="flex gap-4">
        <Button className="flex-1">Buy now</Button>
        <Button className="flex-1" onClick={handleAddToCard}>
          Add to card
        </Button>
      </div>
    </div>
  );
}
