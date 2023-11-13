'use client';

import { Toaster, toast } from 'sonner';

export default function Notif() {
  return (
    <>
      <Toaster richColors position='top-right' />
      <button onClick={() => toast.success('hello')}>Notify me!</button>
    </>
  );
}
