import { text, title } from '../homeStyles';

export function Content() {
   return (
      <div className="space-y-6 w-5/12 mx-auto text-center">
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
