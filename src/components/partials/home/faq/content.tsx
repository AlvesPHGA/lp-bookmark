import { text, title } from '../homeStyles';
import { faqStyle } from './style';

const { content_box } = faqStyle();

export function Content() {
   return (
      <div className={content_box()}>
         <h2 className={title({ size: 'subtitle' })}>
            Frequently Asked Questions
         </h2>
         <p className={text()}>
            Here are some of FAQs. If you have any other questions you&apos;d
            like answered please feel free to email us.
         </p>
      </div>
   );
}
