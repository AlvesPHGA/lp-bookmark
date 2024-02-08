import { Cards } from '../../../../content.mock.json';
import { IDefault } from '../../../pages/Home';

import { Card } from '../../Card/Card';

// export interface IDown {
//    title: string;
//    text: string;
// }

export function Download({ title, text }: IDefault) {
   return (
      <section className="py-20">
         <div className="w-[1200px] mx-auto">
            <div className="w-[55%] mx-auto text-center">
               <h2>{title}</h2>
               <p className="py-10">{text}</p>
            </div>
            <div className="relative w-full flex justify-center gap-6 h-[460px] items-center">
               {Cards.map((card) => (
                  <Card key={card.title} {...card} />
               ))}
            </div>
         </div>
      </section>
   );
}
