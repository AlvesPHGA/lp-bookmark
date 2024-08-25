import { BlueBack, Container } from '@/components/global/componentsGlobal';
import { ContentFeatures } from './content';
import { Feature } from './feture';

export function Features() {
   return (
      <section className="py-44 relative">
         <Container flex_direction="column">
            <ContentFeatures />
            <Feature />
         </Container>
         <BlueBack position="features" />
      </section>
   );
}
