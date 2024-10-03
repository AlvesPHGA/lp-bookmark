import { Container } from '@/components/global/componentsGlobal';
import { Content } from './content';
import { Cards } from './cards';

export function Download() {
   return (
      <section className="py-24 lg:py-20">
         <Container flex_direction="column">
            <Content />
            <Cards />
         </Container>
      </section>
   );
}
