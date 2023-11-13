export async function fetchWriting(id: String) {
    const response = await fetch(`http://localhost:3000/api/writing/${id}`)
    return response.json()
}

export default async function WritingId({ params} : any) {
    const data = await fetchWriting(params.writingId);
    console.log(data)

    return (
        <>
            <h1>Writing Entry No. {params.writingId}</h1>
            {data.writingentry[0].entry}
        </>
    )
};