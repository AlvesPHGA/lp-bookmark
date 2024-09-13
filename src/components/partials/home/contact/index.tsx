'use client';

import { Container } from '@/components/global/componentsGlobal';
import { title } from '../homeStyles';
import { contact } from './style';
import React, { FormEvent } from 'react';
import { FieldInput } from '@/components/form/input';
import contactInput from '@/actions/contact';
import { ContactButton } from './peding-button';
import { TitleSubtitle } from './title-subtitle';

const { section, texts_box, legend, form, input_box } = contact();

export function Contact() {
   const [error, setError] = React.useState(false);

   return (
      <section className={section()}>
         <Container flex_direction="column">
            <TitleSubtitle />
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
