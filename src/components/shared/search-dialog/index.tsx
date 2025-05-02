"use client"

import { Button } from "@/components/ui/button"
import { Command, CommandInput, CommandList } from "@/components/ui/command"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

import { Search } from "lucide-react"
import { useEffect, useState } from "react"
import SearchSuggestion from "./search-suggestion"
import SearchResult from "./search-result"
import { searchProducts } from "@/components/utils/actions/search-products"
import type { ProductCardProps } from "@/types/interfaces/product-card-props"

export default function SearchDialog() {
  const [open, setOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResult, setSearchResult] = useState<ProductCardProps[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const timeId = setTimeout(() => {
      if (searchQuery) {
        setIsLoading(true);
        (async () => {
          try {
            const result = await searchProducts(searchQuery)
            setSearchResult(result)
          } catch (error) {
            console.error("Error fetching search results:", error)
          } finally {
            setIsLoading(false)
          }
        })()
      } else {
        setSearchResult([])
      }
    }, 300)

    return () => clearTimeout(timeId)
  }, [searchQuery])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <div className="flex items-center gap-3">
            <Search className="h-4 w-4" />
            <span>Search products...</span>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Search Product</DialogTitle>
        <Command>
          <CommandInput placeholder="Type something to search" value={searchQuery} onValueChange={setSearchQuery} />
          <CommandList>
            {isLoading ? (
              <div className="py-6 text-center text-sm">Loading...</div>
            ) : searchQuery.trim() === "" ? (
              <SearchSuggestion />
            ) : searchResult.length > 0 ? (
              <SearchResult results={searchResult} />
            ) : (
              <div className="py-6 text-center text-sm">No results found.</div>
            )}
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  )
}

