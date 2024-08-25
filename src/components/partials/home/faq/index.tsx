import { Container, CTA } from '@/components/global/componentsGlobal';
import { text, title } from '../homeStyles';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
   return (
      <section className="py-24">
         <Container flex_direction="column">
            <div className="space-y-6 w-5/12 mx-auto text-center">
               <h2 className={title({ size: 'subtitle' })}>
                  Frequently Asked Questions
               </h2>
               <p className={text()}>
                  Here are some of FAQs. If you have any other questions
                  you&apos;d like answered please feel free to email us.
               </p>
            </div>

            <div className="w-5/12 mx-auto flex flex-col items-center mt-14 gap-10">
               <dl className="w-full">
                  <div className="py-5 border-t border-slate-400">
                     <dt className="text-blue-950 font-medium flex items-center justify-between pr-5">
                        What is Bookmark?
                        <ChevronDown className="text-blue-600 size-10" />
                     </dt>
                     <dd></dd>
                  </div>
                  <div className="py-5 border-t border-slate-400">
                     <dt className="text-blue-950 font-medium flex items-center justify-between pr-5">
                        How can I request a new browser?
                        <ChevronDown className="text-blue-600 size-10" />
                     </dt>
                     <dd></dd>
                  </div>
                  <div className="py-5 border-t border-slate-400">
                     <dt className="text-blue-950 font-medium flex items-center justify-between pr-5">
                        Is there a mobile app?
                        <ChevronDown className="text-blue-600 size-10" />
                     </dt>
                     <dd></dd>
                  </div>
                  <div className="py-5 border-t border-slate-400">
                     <dt className="text-blue-950 font-medium flex items-center justify-between pr-5">
                        What about other Chromium browsers?
                        <ChevronDown className="text-blue-600 size-10" />
                     </dt>
                     <dd></dd>
                  </div>
               </dl>

               <CTA type="small">More Info</CTA>
            </div>
         </Container>
      </section>
   );
}
