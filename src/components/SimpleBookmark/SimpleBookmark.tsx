import { IDefault } from '../../pages/Home';
import { CTA } from '../CTA/CTA';
import { BackBlue } from '../global/BackBlue/BackBlue';
import { BackIllustration } from './BackIllustration';

const cta = ['Chrome', 'Firefox'];

// export interface ISimpleBM {
//    title: string;
//    text: string;
// }
export function SimpleBookmark({ title, text }: IDefault) {
   return (
      <section className="__simpleBookmarkManager relative w-full py-20">
         <BackBlue />
         <BackIllustration />
         <div className={`w-[1200px] mx-auto py-20`}>
            <div className="w-[540px]">
               <h1 className="text-5xl font-medium">{title}</h1>
               <p className="my-7">{text}</p>
               <div className="flex gap-3">
                  {cta.map((c) => (
                     <CTA key={c} legend={c} />
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}
