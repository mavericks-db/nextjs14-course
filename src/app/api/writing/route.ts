import writing from '@/app/writing.json'
import { NextResponse } from 'next/server'

export async function GET(request: Request, context: any) {
    const { params } = context

    return (
        NextResponse.json({
            writing
        })
    )
}