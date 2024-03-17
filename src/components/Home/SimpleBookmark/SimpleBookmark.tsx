import { IDefault } from '../../../pages/Home';
import { CTA } from '../../CTA/CTA';
import { BackBlue } from '../../UI/BackBlue/BackBlue';
import { BackIllustration } from './BackIllustration';

export function SimpleBookmark({ title, text }: IDefault) {
   return (
      <section className="__simpleBookmarkManager relative w-full py-20">
         <BackBlue className="absolute w-[795px] h-[426px] right-0 rounded-bl-[184px] bottom-0 bg-[#5368DF] z-0" />
         <BackIllustration />
         <div className={`w-[1200px] mx-auto py-20`}>
            <div className="w-[540px]">
               <h1 className="text-5xl font-medium">{title}</h1>
               <p className="my-7">{text}</p>
               <div className="flex gap-3">
                  <CTA className="bg-[#5368DF] text-white border-[#5368DF] hover:bg-transparent hover:text-[#5368DF]">
                     Get it on Chrome
                  </CTA>
                  <CTA className="bg-[#F7F7F7] text-veryDarkBlue border-[#F7F7F7] hover:bg-transparent hover:border-veryDarkBlue">
                     Get it on Firefox
                  </CTA>
               </div>
            </div>
         </div>
      </section>
   );
}
