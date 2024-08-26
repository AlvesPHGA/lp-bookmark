import { text } from '../homeStyles';
import { CTA } from '@/components/global/componentsGlobal';
import { intro } from './style';

const { title, text_box } = intro();

export function ContentComponent() {
   return (
      <div className="w-5/12">
         <h1 className={title()}>A Simple Bookmark Manager</h1>
         <div className={text_box()}>
            <p className={text()}>
               A clean and simple interface to organize your favourite websites.
               Open a new browser tab and see your sites load instantly. Try it
               for free.
            </p>

            <div className="flex gap-3">
               <CTA type="blue">Get it on Chrome</CTA>
               <CTA type="gray">Get it on Firefox</CTA>
            </div>
         </div>
      </div>
   );
}
