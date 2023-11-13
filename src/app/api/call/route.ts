import { NextResponse } from "next/server"

export const getRandom = () => {
    return Math.floor(Math.random() * 10)
}


export async function GET() {
    return (
        NextResponse.json({
            number: getRandom()
        })
    )
}