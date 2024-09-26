'use client';

import contactInput from '@/actions/contact';
import { FieldInput } from '@/components/form/input';
import React, { useEffect } from 'react';
import { contact } from './style';
import { ContactButton } from './peding-button';
import { ErrorMessage } from '@/helper/error-message';
import { useFormState } from 'react-dom';

const { form, input_box } = contact();

export function ContactForm() {
   const [state, action] = useFormState(contactInput, {
      success: true,
      message: '',
   });

   useEffect(() => {
      if (state) document.querySelector('form')?.reset();
   }, [state]);

   return (
      <form action={action} method="post" className={form()}>
         <div
            className={`space-y-0.5 bg-white rounded-md border w-80 ${
               state.success ? '' : 'bg-red-500 border-red-500'
            }`}
         >
            <FieldInput
               name="email"
               aria="Digite o seu endereço de email"
               placeholder="Enter your email address"
               alert={state.success}
            />
            <ErrorMessage error={state.message} />
         </div>
         <ContactButton
            place="contact"
            send="Contact Us"
            sending="...sending"
         />
      </form>
   );
}
