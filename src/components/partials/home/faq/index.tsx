import { Container, CTA } from '@/components/global/componentsGlobal';
import { text, title } from '../homeStyles';
import { ChevronDown } from 'lucide-react';
import { Content } from './content';
import { FAQContent } from './faq-content';

export function FAQ() {
   return (
      <section className="py-24">
         <Container flex_direction="column">
            <Content />

            <div className="w-5/12 mx-auto flex flex-col items-center mt-14 gap-10">
               <FAQContent />
               <CTA type="small">More Info</CTA>
            </div>
         </Container>
      </section>
   );
}
