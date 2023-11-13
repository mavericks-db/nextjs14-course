// 'use client'

// import { useParams } from "next/navigation"

export async function generateMetadata({ params }: any) {
  const res = await fetch(`http://localhost:3000/api/blogs/${params.blogId}`);
  // const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const data = await res.json();
  console.log(data);
  return {
    title: data.title,
    description: data.description,
  };
}

export default function BlogId({ params }: any) {
  // const params = useParams()
  console.log(params);

  return (
    <>
      <h1>Blog ID {params.blogId}</h1>
    </>
  );
}
