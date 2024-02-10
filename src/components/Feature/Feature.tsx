import { Backblue } from './BackBlue';
import { Tab } from './Tab';

import { Tabs } from '../../../content.mock.json';
import { IDefault } from '../../pages/Home';
import { Content } from '../global/Content/Content';

export interface IFeature {
   title: string;
   text: string;
}

export function Features({ title, text }: IDefault) {
   return (
      <section className="relative py-20">
         <Backblue />
         <div className="relative w-[1200px] mx-auto z-10">
            <Content title={title} text={text} />
            <Tab {...Tabs} />
         </div>
      </section>
   );
}
