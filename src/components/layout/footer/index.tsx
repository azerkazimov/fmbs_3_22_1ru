import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-300 py-12 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Contact */}
          <div className="md:col-span-1 flex flex-col justify-between">
            <div>
              <Link href="/" className="text-2xl font-bold text-orange-400 hover:text-orange-300">
                pizzashop
              </Link>
            </div>
            <div className="mt-8 md:mt-0">
              <Link href="tel:+79373335533" className="text-gray-300 hover:text-orange-300">
                +7 (937) 333-55-33
              </Link>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-200">Home</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-400 hover:text-orange-300">
                To Order
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-orange-300">
                About us
              </Link>
              <Link href="/events" className="text-gray-400 hover:text-orange-300">
                Events
              </Link>
              <Link href="/menu" className="text-gray-400 hover:text-orange-300">
                Menu
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-200">Events</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/events/pizza-coffee" className="text-gray-400 hover:text-orange-300">
                3 Pizza 1 Free Coffee
              </Link>
              <Link href="/events/pizza-deal" className="text-gray-400 hover:text-orange-300">
                2 Pizza for 1 Price
              </Link>
              <Link href="/events/kitchen-tour" className="text-gray-400 hover:text-orange-300">
                Kitchen Tour
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-200">Menu</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/menu" className="text-gray-400 hover:text-orange-300">
                Show All
              </Link>
              <Link href="/menu/seafood" className="text-gray-400 hover:text-orange-300">
                Seaproducts
              </Link>
              <Link href="/menu/vegan" className="text-gray-400 hover:text-orange-300">
                Vegan
              </Link>
              <Link href="/menu/meat" className="text-gray-400 hover:text-orange-300">
                Meat
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-200">About Us</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/about/history" className="text-gray-400 hover:text-orange-300">
                Our History
              </Link>
              <Link href="/about/why-us" className="text-gray-400 hover:text-orange-300">
                Why We?
              </Link>
            </nav>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-end mt-12">
          <div className="flex space-x-4">
            <Link href="https://instagram.com" className="text-gray-300 hover:text-orange-300" aria-label="Instagram">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="https://twitter.com" className="text-gray-300 hover:text-orange-300" aria-label="Twitter">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="https://facebook.com" className="text-gray-300 hover:text-orange-300" aria-label="Facebook">
              <Facebook className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
