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
      ok: false,
      error: '',
      data: null,
   });

   useEffect(() => {
      if (state.ok) document.querySelector('form')?.reset();
   }, [state.ok]);

   return (
      <form action={action} method="post" className={form()}>
         <div className={input_box()}>
            <FieldInput
               name="email"
               aria="Digite o seu endereço de email"
               placeholder="Enter your email address"
               alert={state.ok}
            />
            <ErrorMessage error={state.error} />
         </div>
         <ContactButton
            place="contact"
            send="Contact Us"
            sending="...sending"
         />
      </form>
   );
}
