import Link from 'next/link';

export const getRandom = () => {
  return Math.floor(Math.random() * 10);
};

export async function fetchRandom() {
  const response = await fetch('http://localhost:3000/api/call', {
    // cache: 'no-store', // by default it is force-cache
    next: {
      revalidate: 5,
    },
  });
  const data = await response.json();
  return data;
}

export default async function SSR() {
  const { number } = await fetchRandom();

  return (
    <>
      <h1>Server Component</h1>
      <h1 className='text-6xl'>{getRandom()}</h1>
      <Link href='/call'>Back to Call Page</Link>

      <h2>Random Number</h2>
      <p>{number}</p>
    </>
  );
}
