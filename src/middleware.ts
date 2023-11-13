import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const isLoggedIn: Boolean = false

export function middleware(request: NextRequest) {
    let cookie = request.cookies.get('my-cookie')

    let headers= new Headers(request.headers)

    if(isLoggedIn) {
        return NextResponse.next()
    } else {
        return NextResponse.redirect(new URL('/', request.url))
    }

    // return (
    //     NextResponse.json({
    //         hello: 'middleware'
    //     })
    // )
}

export const config = {
    matcher: ["/profile"]
}