'use client';

import { Container } from '@/components/global/componentsGlobal';
import { contact } from './style';
import React from 'react';
import { TitleSubtitle } from './title-subtitle';
import { ContactForm } from './contactForm';

const { section, container } = contact();

export function Contact() {
   return (
      <section className={section()}>
         <div className={container()}>
            <TitleSubtitle />
            <ContactForm />
         </div>
      </section>
   );
}
