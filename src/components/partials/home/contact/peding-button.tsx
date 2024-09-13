'use client';

import Button from '@/components/form/button';
import React from 'react';
import { useFormStatus } from 'react-dom';

interface ContactButtonProps extends React.ComponentProps<'button'> {
   place: 'header' | 'contact';
   send: string;
   sending: string;
}

export function ContactButton({ place, send, sending }: ContactButtonProps) {
   const { pending } = useFormStatus();
   return (
      <>
         {pending ? (
            <Button disabled={pending} place={place} status="block">
               {sending}
            </Button>
         ) : (
            <Button place={place}>{send}</Button>
         )}
      </>
   );
}
