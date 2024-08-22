import { Container } from '@/components/global/componentsGlobal';
import { ContentComponent } from './content';

export function IntroHome() {
   return (
      <section className="py-28">
         <Container>
            <ContentComponent />
         </Container>
      </section>
   );
}
