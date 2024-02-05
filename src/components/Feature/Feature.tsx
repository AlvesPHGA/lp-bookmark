import { Backblue } from './BackBlue';
import { Tab } from './Tab';

import { Tabs } from '../../../content.mock.json';

export interface IFeature {
   title: string;
   text: string;
}

export function Features({ title, text }: IFeature) {
   return (
      <section className="relative py-20">
         <Backblue />
         <div className="relative w-[1200px] mx-auto z-10">
            <div className="text-center w-[50%] mx-auto pb-5">
               <h2 className="text-3xl font-medium">{title}</h2>
               <p className="pt-6">{text}</p>
            </div>
            <Tab {...Tabs} />
         </div>
      </section>
   );
}
