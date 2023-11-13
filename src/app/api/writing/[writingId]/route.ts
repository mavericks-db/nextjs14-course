import writing from '@/app/writing.json'
import { NextResponse } from 'next/server'

export async function GET(request: Request, context: any) {
    const { params } = context
    const writingentry = writing.filter(x => params.writingId === x.id.toString())

    return (
        NextResponse.json({
            writingentry
        })
    )
}