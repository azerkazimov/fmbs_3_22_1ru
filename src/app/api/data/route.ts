import { NextResponse } from "next/server";

export async function GET() {
    const data = [
        {
            id: 1,
            name: "John",
            surname: "Doe",
            age: 35,
        },
        {
            id: 2,
            name: "Jane",
            surname: "Smith",
            age: 28,
        },
        {
            id: 3,
            name: "Alice",
            surname: "Johnson",
            age: 42,
        },
        {
            id: 4,
            name: "Bob",
            surname: "Brown",
            age: 50,
        }
    ];
    return NextResponse.json(data);
}