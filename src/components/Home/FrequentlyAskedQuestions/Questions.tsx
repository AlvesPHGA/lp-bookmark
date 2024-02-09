import { ReactSVG } from 'react-svg';

import ArrowDown from '../../../assets/icon-arrow.svg';

export interface IQuestion {
   question: string;
   reply: string;
}

export function QuestionsList({ question, reply }: IQuestion) {
   return (
      <div className="border-t last:border-b border-grayishBlue py-5 pr-2">
         <dt className="mb-5 text-xl text-veryDarkBlue flex justify-between items-center cursor-pointer hover:text-softRed transition-all">
            {question}
            <ReactSVG src={ArrowDown} />
         </dt>
         <dd className="text-lg text-grayishBlue">{reply}</dd>
      </div>
   );
}
