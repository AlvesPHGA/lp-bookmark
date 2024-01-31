import { CTA } from '../CTA/CTA';
import { BackIllustration } from './BackIllustration';

const cta = ['Chrome', 'Firefox'];

export interface ISimpleBM {
   title: string;
   text: string;
}
export function SimpleBookmark({ title, text }: ISimpleBM) {
   return (
      <section className="w-full py-20 border border-red-600 relative">
         <BackIllustration />
         <div className={`w-[1200px] mx-auto py-20 border`}>
            <div className="w-[540px]">
               <h1 className="text-5xl font-medium">{title}</h1>
               <p className="text-grayishBlue my-7">{text}</p>
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
