import { components } from "@/data/navbar/navbar";
import { NextResponse } from "next/server";


export async function GET() {
    return NextResponse.json(components)
}