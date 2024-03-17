import { Tab } from './Tab';

// import { Tabs } from '../../../../content.mock.json';
import { IDefault } from '../../../pages/Home';
import { Content } from '../../global/Content/Content';
import { BackBlue } from '../../UI/BackBlue/BackBlue';

export interface IFeature {
   title: string;
   text: string;
}

export function Features({ title, text }: IDefault) {
   return (
      <section className="__features relative py-20">
         <BackBlue className="absolute w-[900px] h-[400px] left-0 rounded-br-[184px] bottom-0 bg-[#5368DF] z-0" />
         <div className="relative w-[1200px] mx-auto z-10">
            <Content title={title} text={text} />
            <Tab />
         </div>
      </section>
   );
}
