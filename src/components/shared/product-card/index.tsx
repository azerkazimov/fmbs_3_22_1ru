"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProductCardProps } from "@/types/interfaces/product-card-props";
import Link from "next/link";
import useCardStore from "@/store/card-store";

export default function ProductCard({
  product,
}: {
  product: ProductCardProps;
}) {
  const { id, name, description, price, discount, image, category, url } =
    product;
  const discountedPrice = discount ? price - (price * discount) / 100 : null;
  const { addToCard } = useCardStore();
  const handleAddToCard = () => {
    addToCard(product);
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative h-60 w-full overflow-hidden bg-muted">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {discount && (
          <Badge className="absolute right-2 top-2 bg-destructive">
            {discount}% OFF
          </Badge>
        )}
        {category && (
          <Badge variant="secondary" className="absolute left-2 top-2">
            {category}
          </Badge>
        )}
      </div>
      <CardHeader className="p-4">
        <CardTitle className="line-clamp-1 text-xl">{name}</CardTitle>
        <CardDescription className="line-clamp-2 h-10">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex items-center gap-2">
          {discountedPrice ? (
            <>
              <span className="text-xl font-bold">
                ${discountedPrice.toFixed(2)}
              </span>
              <span className="text-sm text-muted-foreground line-through">
                ${price.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="text-xl font-bold">${price.toFixed(2)}</span>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button className="w-fit" onClick={handleAddToCard}>
          Add to Cart
        </Button>
        <Link href={url}>
          <Button className="w-full">View</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
