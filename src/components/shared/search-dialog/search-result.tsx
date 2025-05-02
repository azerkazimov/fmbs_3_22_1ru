import { CommandGroup, CommandItem } from "@/components/ui/command";
import { ProductCardProps } from "@/types/interfaces/product-card-props";
import Image from "next/image";
import Link from "next/link";

export default function SearchResult({ results }: { results: ProductCardProps[] }) {
  return (
    <CommandGroup heading="Products">
      {results.map((product) => (
        <CommandItem key={product.id} value={product.name}>
          <Link 
            href={product.url} 
            className="flex items-center gap-3 w-full"
            onClick={() => {
              
              const dialogElement = document.querySelector('[role="dialog"]');
              if (dialogElement) {
                const closeButton = dialogElement.querySelector('button[data-state="open"]');
                if (closeButton) {
                  (closeButton as HTMLButtonElement).click();
                }
              }
            }}
          >
            {product.image && (
              <div className="relative h-10 w-10 overflow-hidden rounded-md">
                <Image 
                  src={product.image || "/placeholder.svg"} 
                  alt={product.name}
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
            )}
            <div className="flex flex-col">
              <span className="font-medium">{product.name}</span>
              <span className="text-xs text-muted-foreground">{product.category}</span>
            </div>
            <div className="ml-auto font-medium">
              ${product.price.toFixed(2)}
              {product.discount && (
                <span className="ml-2 text-xs text-green-600">
                  {(product.discount * 100).toFixed(0)}% off
                </span>
              )}
            </div>
          </Link>
        </CommandItem>
      ))}
    </CommandGroup>
  );
}
