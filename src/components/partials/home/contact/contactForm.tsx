'use client';

import contactInput from '@/actions/contact';
import { FieldInput } from '@/components/form/input';
import React from 'react';
import { contact } from './style';
import { ContactButton } from './peding-button';
import { ErrorMessage } from '@/helper/error-message';

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
            {error && <ErrorMessage />}
         </div>
         <ContactButton
            place="contact"
            send="Contact Us"
            sending="...sending"
         />
      </form>
   );
}
