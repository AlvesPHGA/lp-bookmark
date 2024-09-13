import { title } from '../homeStyles';
import { contact } from './style';

const { texts_box, legend } = contact();

export function TitleSubtitle() {
   return (
      <div className={texts_box()}>
         <p className={legend()}>35,000+ already joined</p>
         <h2 className={title({ size: 'subtitle', color: 'white' })}>
            Stay up-to-date with what we&apos;re doing
         </h2>
      </div>
   );
}
