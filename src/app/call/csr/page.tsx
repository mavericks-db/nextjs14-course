'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CSR() {
  const [num, setNum] = useState(null);

  const getRandom = () => {
    return Math.floor(Math.random() * 10);
  };

  const fetchRandom = async () => {
    const response = await fetch('http://localhost:3000/api/call', {
      cache: 'force-cache',
    });
    const { number } = await response.json();
    setNum(number);
  };

  useEffect(() => {
    fetchRandom();
  }, []);

  return (
    <>
      <h1>Client Component</h1>
      {/* <h1 className='text-6xl'>{getRandom()}</h1> */}
      <Link href='/call'>Back to Call Page</Link>

      <h2>Random Number</h2>
      <p>{num && num}</p>
    </>
  );
}
