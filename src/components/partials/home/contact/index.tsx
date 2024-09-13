'use client';

import { Container } from '@/components/global/componentsGlobal';
import { title } from '../homeStyles';
import Button from '@/components/form/button';
import { contact } from './style';
import React, { FormEvent } from 'react';
import { FieldInput } from '@/components/form/input';
import contactInput from '@/actions/contact';
import { ContactButton } from './peding-button';

const { section, texts_box, legend, form, input_box } = contact();

export function Contact() {
   const [error, setError] = React.useState(false);

   function handleSubmit(ev: FormEvent<HTMLFormElement>) {
      ev.preventDefault();

      const formData = new FormData(ev.currentTarget);
      const email = formData.get('email') as string | null;

      if (!email) setError(true);
      else setError(false);
   }

   return (
      <section className={section()}>
         <Container flex_direction="column">
            <div className={texts_box()}>
               <p className={legend()}>35,000+ already joined</p>
               <h2 className={title({ size: 'subtitle', color: 'white' })}>
                  Stay up-to-date with what we&apos;re doing
               </h2>
            </div>
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
         </Container>
      </section>
   );
}
