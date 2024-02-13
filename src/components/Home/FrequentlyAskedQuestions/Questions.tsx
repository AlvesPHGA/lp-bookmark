import { ReactSVG } from 'react-svg';

import ArrowDown from '../../../assets/icon-arrow.svg';
import React from 'react';

export interface IQuestion {
   question: string;
   reply: string;
}

export function QuestionsList({ question, reply }: IQuestion) {
   const [show, setShow] = React.useState('__reply-invisible');

   function handleClick({ target }) {
      if (target.nextSibling.classList.contains('__reply-invisible')) {
         setShow('__reply-visible');
         target.firstElementChild.style.rotate = '180deg';
         target.firstElementChild.firstElementChild.firstElementChild.firstElementChild.style.stroke =
            'hsl(0, 94%, 66%)';
      } else {
         setShow('__reply-invisible');
         target.firstElementChild.style.rotate = 'initial';
         target.firstElementChild.firstElementChild.firstElementChild.firstElementChild.style.stroke =
            '#5267DF';
      }
   }

   return (
      <div className="relative border-t last:border-b border-grayishBlue pt-5 pb-1 pr-2">
         <dt key={question} className="__question" onClick={handleClick}>
            {question}
            <ReactSVG src={ArrowDown} />
         </dt>
         <dd className={`__reply ${show}`}>{reply}</dd>
      </div>
   );
}
