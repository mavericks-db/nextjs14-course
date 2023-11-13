import Link from 'next/link';

export default function Call() {
  return (
    <>
      <h1>Call Page</h1>
      <ul>
        <li>
          <Link href='/call/ssr'>SSR</Link>
        </li>
        <li>
          <Link href='/call/csr'>CSR</Link>
        </li>
      </ul>
    </>
  );
}
