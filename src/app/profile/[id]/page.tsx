'use client';

import { useParams, useRouter } from 'next/navigation';

export default function ProfileID() {
  const params = useParams();
  const router = useRouter();
  console.log(params.id);

  return (
    <>
      <div>My Profile ID page {params.id}</div>
      <p onClick={() => router.push('/profile')}>Back to Profile page</p>
    </>
  );
}
