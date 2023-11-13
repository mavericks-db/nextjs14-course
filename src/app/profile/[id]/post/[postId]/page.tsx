'use client';

import { useParams } from 'next/navigation';

export default function ProfileIDPostsID() {
  const params = useParams();
  console.log(params.postId);

  return (
    <>
      <div>My Profile ID Posts ID</div>
    </>
  );
}
