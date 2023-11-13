
// server component
// export default function ArticleId({ params, searchParams}: any) {
//     return (
//         <>
//         <h1>Article {params.articleId}</h1>
//         <h1>Article {searchParams.new}</h1>
//         </>
//     )
// }

'use client'

import { useParams, useSearchParams } from "next/navigation"

export default function ArticleId() {
    const params = useParams();
    const searchParams = useSearchParams()
    console.log(params)
    console.log(searchParams)

    const myquery = searchParams.get('new')

    return (
         <>
        <h1>Article {params.articleId}</h1>
        <h1>Article {myquery}</h1>
        </>
    )
};