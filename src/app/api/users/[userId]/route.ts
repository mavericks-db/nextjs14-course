import data from '@/app/data.json'
import { NextResponse } from 'next/server'

export async function POST(request: Request, context: any) {
    const { params} = context
    const user = data.filter(x => params.userId === x.id.toString())

    // const data = await request.json()

    return (NextResponse.json({
        user
    }))
}