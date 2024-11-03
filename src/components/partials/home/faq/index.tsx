import { CTA } from '@/components/global/componentsGlobal';
import { Content } from './content';
import { FAQContent } from './faq-content';
import { faqStyle } from './style';

const { faq, container, faq_box } = faqStyle();

export function FAQ() {
   return (
      <section className={faq()}>
         <div className={container()}>
            <Content />

            <div className={faq_box()}>
               <FAQContent />
               <CTA type="small">More Info</CTA>
            </div>
         </div>
      </section>
   );
}
