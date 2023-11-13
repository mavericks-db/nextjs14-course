'use client';

import { userStore } from './userStore';

export default function Store() {
  const user = userStore((state: any) => state.user);
  const updateUser = userStore((state: any) => state.updateUser);

  const sub = userStore.subscribe(() => {
    console.log('first');
  });

  sub();

  return (
    <>
      <h1>Store</h1>
      {user.firstName}
      <br />
      <input
        type='text'
        className='border'
        onChange={(e) =>
          updateUser({
            firstName: e.target.value,
          })
        }
      />
    </>
  );
}
