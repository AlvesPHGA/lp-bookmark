import { QuestionsList } from './Questions';

import { Questions } from '../../../../content.mock.json';

export interface IFAQ {
   title: string;
   text: string;
}

export function FrequentlyAskedQuestions({ title, text }: IFAQ) {
   return (
      <section className="py-20">
         <div className="w-[1200px] mx-auto">
            <div className="w-[50%] text-center mx-auto mb-10">
               <h2>{title}</h2>
               <p className="mt-7">{text}</p>
            </div>
            <dl className="w-[50%] mx-auto">
               {Questions.map((q) => (
                  <QuestionsList key={q.question} {...q} />
               ))}
            </dl>
         </div>
      </section>
   );
}
