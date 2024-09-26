'use client';

import { ChevronDown } from 'lucide-react';
import { faq } from './style';
import React from 'react';
import { FAQFieldProps } from './interface';

const { faq_field, question_faq, answer_faq, arrow } = faq({
   answer: 'hidden',
});

export function FAQField({ question, answer }: FAQFieldProps) {
   const [active, setActive] = React.useState(false);

   function handleClick() {
      setActive(!active);
   }
   return (
      <div className={faq_field()}>
         <dt className={question_faq()} onClick={handleClick}>
            {question}
            <ChevronDown className={arrow({ active })} />
         </dt>
         <dd className={answer_faq({ active })}>{answer}</dd>
      </div>
   );
}
