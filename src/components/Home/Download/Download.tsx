import { Cards } from '../../../../content.mock.json';
import { IDefault } from '../../../pages/Home';

import { Card } from '../../Card/Card';
import { Content } from '../../global/Content/Content';

// export interface IDown {
//    title: string;
//    text: string;
// }

export function Download({ title, text }: IDefault) {
   return (
      <section className="py-20">
         <div className="w-[1200px] mx-auto">
            <Content title={title} text={text} />
            <div className="relative w-full flex justify-center gap-6 h-[460px] items-center">
               {Cards.map((card) => (
                  <Card key={card.title} {...card} />
               ))}
            </div>
         </div>
      </section>
   );
}
