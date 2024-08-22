import { Container } from '@/components/global/componentsGlobal';
import { ContentComponent } from './content';
import Image from 'next/image';
import { intro } from '../homeStyles';
import { BlueBack } from './blueBack';

const { base } = intro();

export function IntroHome() {
   return (
      <section className={base()}>
         <Container items_position="center">
            <ContentComponent />
            <Image
               src="./illustration-hero.svg"
               alt="a screen image"
               width={700}
               height={200}
               className="absolute -right-28 z-10"
            />
         </Container>
         <BlueBack />
      </section>
   );
}
