import { BlueBack, Container } from '@/components/global/componentsGlobal';
import { ContentFeatures } from './content';
import { Feature } from './feture';

export function Features() {
   return (
      <section className="py-44 relative lg:pt-24 lg:pb-32 md:pt-10 border">
         <Container flex_direction="column">
            <ContentFeatures />
            <Feature />
         </Container>
         <BlueBack position="features" />
      </section>
   );
}
