import { BlueBack } from '@/components/global/componentsGlobal';
import { ContentFeatures } from './content';
import { Feature } from './feture';
import { features } from './style';

const { feature, container } = features();

export function Features() {
   return (
      <section className={feature()}>
         <div className={container()}>
            <ContentFeatures />
            <Feature />
         </div>
         <BlueBack position="features" />
      </section>
   );
}
