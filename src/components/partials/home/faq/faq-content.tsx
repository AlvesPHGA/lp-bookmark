import { ChevronDown } from 'lucide-react';

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
               <div
                  key={data.id}
                  className="py-5 border-t border-slate-400 last:border-b"
               >
                  <dt className="text-blue-950 font-medium flex items-center justify-between pr-5 cursor-pointer hover:text-red-500 transition">
                     {data.question}
                     <ChevronDown className="text-blue-600 size-10" />
                  </dt>
                  <dd></dd>
               </div>
            );
         })}
      </dl>
   );
}
