import { Container, CTA } from '@/components/global/componentsGlobal';
import { Content } from './content';
import { FAQContent } from './faq-content';
import { faq } from './style';

const { faq_box } = faq();

export function FAQ() {
   return (
      <section className="py-24">
         <Container flex_direction="column">
            <Content />

            <div className={faq_box()}>
               <FAQContent />
               <CTA type="small">More Info</CTA>
            </div>
         </Container>
      </section>
   );
}
