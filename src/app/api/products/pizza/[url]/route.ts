import { products } from "@/data/products/products"
import { NextResponse } from "next/server"

export async function GET(request: Request, { params }: { params: { url: string } }) {
    const { url } = params


    const data = products.find((item) => item.url === `/products/pizza/${url}`)


    if (!data) {
        return NextResponse.json({ error: "Category not found" }, { status: 404 })
    }

    return NextResponse.json(data)
}