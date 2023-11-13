'use client'

import { useRouter } from "next/navigation"
import Link from "next/link"

export default function Profile() {
    const router = useRouter()
    console.log(router)

    return (
        <>
        <div>My profile page</div>
        <ul>
            <Link href='/profile/1'>Profile 1</Link>
            <Link href='/profile/2'>Profile 2</Link>
            <Link prefetch={true} href={{
                pathname: "/profile/3",
                query: {
                    userName: "mavericks"
                }
            }}>Profile 3</Link>
        </ul>
        </>
    )
};