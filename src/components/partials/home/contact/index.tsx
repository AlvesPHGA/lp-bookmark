'use client';

import { Container } from '@/components/global/componentsGlobal';
import { contact } from './style';
import React from 'react';
import { TitleSubtitle } from './title-subtitle';
import { ContactForm } from './contactForm';

const { section } = contact();

export function Contact() {
   return (
      <section className={section()}>
         <Container flex_direction="column">
            <TitleSubtitle />
            <ContactForm />
         </Container>
      </section>
   );
}
