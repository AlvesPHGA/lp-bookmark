import { QuestionsList } from './Questions';

import { Questions } from '../../../../content.mock.json';
import { IDefault } from '../../../pages/Home';
import { Content } from '../../global/Content/Content';

// export interface IFAQ {
//    title: string;
//    text: string;
// }

export function FrequentlyAskedQuestions({ title, text }: IDefault) {
   return (
      <section className="py-20">
         <div className="w-[1200px] mx-auto">
            <Content title={title} text={text} />
            <dl className="w-[50%] mx-auto">
               {Questions.map((q) => (
                  <QuestionsList key={q.question} {...q} />
               ))}
            </dl>
            <a
               href=""
               className="block w-fit font-medium border-2 border-[#5368DF] bg-[#5368DF] text-white text-sm py-2 px-4 rounded-md mx-auto mt-12 hover:bg-transparent hover:text-[#5368DF] transition-all"
            >
               More Info
            </a>
         </div>
      </section>
   );
}
