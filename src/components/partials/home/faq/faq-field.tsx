'use client';

import { ChevronDown } from 'lucide-react';
import { faqStyle } from './style';
import React from 'react';
import { FAQFieldProps } from './interface';

const { faq_field, question_faq, answer_faq, arrow } = faqStyle({
   answer: 'hidden',
});

export function FAQField({ key, question, answer }: FAQFieldProps) {
   const [active, setActive] = React.useState(false);

   function handleClick() {
      setActive(!active);
   }
   return (
      <div role="dialog" aria-labelledby={question} className={faq_field()}>
         <dt
            id={question}
            role="button"
            tabIndex={key}
            className={question_faq()}
            onClick={handleClick}
         >
            {question}
            <ChevronDown className={arrow({ active })} />
         </dt>
         <dd className={answer_faq({ active })}>{answer}</dd>
      </div>
   );
}
