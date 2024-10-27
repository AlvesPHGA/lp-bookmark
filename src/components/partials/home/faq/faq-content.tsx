'use client';

import React from 'react';
import { FAQField } from './faq-field';

const contentfaq = [
   {
      id: 1,
      question: 'What is Bookmark?',
      answer:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis in commodi placeat culpa quibusdam sapiente eamodi consequuntur a totam',
   },
   {
      id: 2,
      question: 'How can I request a new browser?',
      answer:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis in commodi placeat culpa quibusdam sapiente eamodi consequuntur a totam',
   },
   {
      id: 3,
      question: 'Is there a mobile app?',
      answer:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis in commodi placeat culpa quibusdam sapiente eamodi consequuntur a totam',
   },
   {
      id: 4,
      question: 'What about other Chromium browsers?',
      answer:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis in commodi placeat culpa quibusdam sapiente eamodi consequuntur a totam',
   },
];

export function FAQContent() {
   return (
      <dl className="w-full">
         {contentfaq.map((data) => {
            return (
               <FAQField
                  key={data.id}
                  question={data.question}
                  answer={data.answer}
               />
            );
         })}
      </dl>
   );
}
