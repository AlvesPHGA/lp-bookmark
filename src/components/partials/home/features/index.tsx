import { BlueBack, Container } from '@/components/global/componentsGlobal';
import { ContentFeatures } from './content';
import Image from 'next/image';
import Link from 'next/link';
import { text, title } from '../homeStyles';
import { cta } from '@/components/global/componentsGlobalStyle';
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
