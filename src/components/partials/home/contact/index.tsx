'use client';

import { Container } from '@/components/global/componentsGlobal';
import { title } from '../homeStyles';
import { contact } from './style';
import React, { FormEvent } from 'react';
import { FieldInput } from '@/components/form/input';
import contactInput from '@/actions/contact';
import { ContactButton } from './peding-button';
import { TitleSubtitle } from './title-subtitle';
import { ContactForm } from './contactForm';

const { section, texts_box, legend, form, input_box } = contact();

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
