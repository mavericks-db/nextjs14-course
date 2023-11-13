'use client'

import Header from '@/components/Header'
import type { Metadata } from 'next'
import Image from 'next/image'

const metadata: Metadata = {
  title: "Home",
  description: "Home description",
  openGraph: {
    title: 'my title',
    description: 'my description',
    url: 'mywebsite.com',
    siteName: 'MyWebsite',
    images: [
      {
      url: '/myimage.png',
      width: 200,
      height: 200
    },
     {
      url: '/myimage.png',
      width: 200,
      height: 200
    }
  ]
  }
}

export default function Home() {
  const name = "Mavericks"

  const fetchAPI = async () => {
    try {
      const res = await fetch('/api/users')
      const data = await res.json()     
      console.log(data)
    } catch (error) {
      console.log({error})
    }
  }

  const handleClick = () => {
    fetchAPI();
  }


  return (
    <>
    <Header name={name} age={32} isMan={true}>
      <p>A message from home</p>
    </Header>
    <main>
      Main page of my application
    </main>
    <Image src={'/sample.jpg'} width={500} height={500} alt='my placeholder'/>

    <button onClick={handleClick}>Call my API</button>
    </>
  )
}
