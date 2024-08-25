import { ChevronDown } from 'lucide-react';
import { faq } from '../homeStyles';

const { faq_field, question } = faq();

const contentfaq = [
   {
      id: 1,
      question: 'What is Bookmark?',
   },
   {
      id: 2,
      question: 'How can I request a new browser?',
   },
   {
      id: 3,
      question: 'Is there a mobile app?',
   },
   {
      id: 4,
      question: 'What about other Chromium browsers?',
   },
];

export function FAQContent() {
   return (
      <dl className="w-full">
         {contentfaq.map((data) => {
            return (
               <div key={data.id} className={faq_field()}>
                  <dt className={question()}>
                     {data.question}
                     <ChevronDown className="text-blue-600 size-10" />
                  </dt>
                  <dd className="mt-5 text-slate-400">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Reiciendis in commodi placeat culpa quibusdam sapiente ea
                     modi consequuntur a totam
                  </dd>
               </div>
            );
         })}
      </dl>
   );
}
