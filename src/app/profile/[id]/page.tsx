'use client'

import { useParams } from "next/navigation"

export default function ProfileID() {
    const params= useParams()
    console.log(params)

    return (
        <>
        <div>My Profile ID page</div>
        </>
    )
};