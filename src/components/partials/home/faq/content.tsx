import { faq, text, title } from '../homeStyles';

const { content_box } = faq();

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
