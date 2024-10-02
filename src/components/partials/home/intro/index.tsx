import { BlueBack, Container } from '@/components/global/componentsGlobal';
import { ContentComponent } from './content';
import Image from 'next/image';
import { intro } from './style';

const { base, img_box } = intro();

export function IntroHome() {
   return (
      <section className={base()}>
         <Container items_position="center">
            <ContentComponent />
            <div className={img_box()}>
               <Image
                  src="./illustration-hero.svg"
                  alt="a screen image"
                  fill
                  className="object-fill"
               />
            </div>
         </Container>
         <BlueBack position="intro" />
      </section>
   );
}
