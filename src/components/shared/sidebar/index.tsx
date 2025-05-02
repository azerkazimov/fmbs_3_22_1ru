"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import useCardStore from "@/store/card-store";
import { Item } from "@radix-ui/react-navigation-menu";
import { ShoppingCart } from "lucide-react";
import ProductItem from "./product-item";

export default function Sidebar() {
  const { card } = useCardStore();
  const cardItem = card;
  const totalItems = cardItem.length;
  const totalPrice = cardItem.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Sheet>
      <SheetTrigger asChild={true}>
        <Button variant={"outline"} size="icon" className="relative">
          <ShoppingCart />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-xs text-black ">
              {totalItems}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col h-full justify-between">
          <div className=" py-5 overflow-y-auto">
            {cardItem.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center space-y-4">
                <div className="rounded-full border border-white/20 p-6">
                  <ShoppingCart className="h-8 w-8 text-white/50" />
                </div>
                <div className="text-center">
                  <p className="text-lg font-medium text-white">
                    Your cart is empty
                  </p>
                  <p className="text-sm text-white/60">
                    Add items to your cart to checkout
                  </p>
                </div>
              </div>
            ) : (
              <ul className="space-y-2">
                {cardItem.map((item) => (
                  <ProductItem key={item.id} product={item} />
                ))}
              </ul>
            )}
          </div>

          {cardItem.length > 0 && (
            <div className="border-t border-white/20 pt-4">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <Button className="w-full mt-4">Checkout</Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
