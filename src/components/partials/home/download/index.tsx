import { Content } from './content';
import { Cards } from './cards';
import { downloadStyle } from './style';

const { download, container } = downloadStyle();

export function Download() {
   return (
      <section className={download()}>
         <div className={container()}>
            <Content />
            <Cards />
         </div>
      </section>
   );
}
