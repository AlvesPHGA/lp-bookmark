import { BlueBack, Container } from '@/components/global/componentsGlobal';
import { ContentFeatures } from './content';
import { Feature } from './feture';

export function Features() {
   return (
      <section className="py-44 relative lg:pt-24 lg:pb-32">
         <Container flex_direction="column">
            <ContentFeatures />
            <Feature />
         </Container>
         <BlueBack position="features" />
      </section>
   );
}
