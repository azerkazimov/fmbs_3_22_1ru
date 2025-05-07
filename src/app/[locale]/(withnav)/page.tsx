import Hero from "@/components/main/hero";
import Products from "@/components/main/products";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container flex flex-col min-h-screen gap-3 ">
      <Hero/>
      <Products />
      

      <div className="flex gap-3">
        <Button className="bg-red-500">
          <Link href="/about">About</Link>
        </Button>
        <Button className="bg-blue-500">
          <Link href="/contacs">Contacts</Link>
        </Button>
      </div>
    </div>
  );
}
