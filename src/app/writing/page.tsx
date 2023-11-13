'use client';

import { SetStateAction, useEffect, useState } from 'react';

interface WritingEntry {
  id: String;
  entry: String;
}

interface Writing {
  map(arg0: (el: any) => import('react').JSX.Element): unknown;
  writing: WritingEntry[];
}

export default function Writing() {
  const [writing, setWriting] = useState<Writing | undefined>(undefined);

  async function fetchWriting() {
    const response = await fetch('http://localhost:3000/api/writing');
    const data = await response.json();
    console.log(data.writing);
    setWriting(data.writing);
    return data.writing;
  }

  useEffect(() => {
    const fetching = async () => {
      fetchWriting();
    };

    fetching();
  }, []);

  return (
    <>
      <h1>This is the writing page</h1>
      {writing &&
        writing.map((el) => {
          return (
            <div key={el.id}>
              <h1>{el.id}</h1>
            </div>
          );
        })}
    </>
  );
}
