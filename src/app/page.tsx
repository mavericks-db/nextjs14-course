import Header from '@/components/Header'
import Image from 'next/image'

export default function Home() {
  const name = "Mavericks"
  return (
    <>
    <Header name={name} age={32} isMan={true}>
      <p>A message from home</p>
    </Header>
    <main>
      Main page of my application
    </main>
    <Image src={'/sample.jpg'} width={500} height={500} alt='my placeholder'/>
    </>
  )
}
