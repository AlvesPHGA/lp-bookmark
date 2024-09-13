'use client';

import contactInput from '@/actions/contact';
import { FieldInput } from '@/components/form/input';
import React from 'react';
import { contact } from './style';
import { ContactButton } from './peding-button';

const { form, input_box } = contact();

export function ContactForm() {
   const [error, setError] = React.useState(false);
   return (
      <form action={contactInput} method="post" className={form()}>
         <div className={input_box()}>
            <FieldInput
               name="email"
               aria="Digite o seu endereço de email"
               placeholder="Enter your email address"
            />
            {error && (
               <div className="w-full bg-red-500 border border-red-500  rounded-b-md">
                  <span className="text-sm text-white font-medium italic pl-1">
                     whoops, make sure it&apos;s an email.
                  </span>
               </div>
            )}
         </div>
         <ContactButton
            place="contact"
            send="Contact Us"
            sending="...sending"
         />
      </form>
   );
}
