import Header from '@/components/Header'

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
    </>
  )
}
