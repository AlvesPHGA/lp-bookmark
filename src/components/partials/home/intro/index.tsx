import { BlueBack } from '@/components/global/componentsGlobal';
import { ContentComponent } from './content';
import Image from 'next/image';
import { intro } from './style';

const { base, container, img_box, img_intro } = intro();

export function IntroHome() {
   return (
      <section className={base()}>
         <div className={container()}>
            <ContentComponent />
            <div className={img_box()}>
               <Image
                  src="./illustration-hero.svg"
                  alt="a screen image"
                  fill
                  className={img_intro()}
               />
            </div>
         </div>

         <BlueBack position="intro" />
      </section>
   );
}
