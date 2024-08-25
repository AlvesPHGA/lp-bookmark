import { text, title } from '../homeStyles';

export function Content() {
   return (
      <div className="space-y-6 w-2/5 mx-auto text-center">
         <h2 className={title({ size: 'subtitle' })}>Download the extension</h2>

         <p className={text()}>
            We&apos;ve got more browser in the pipeline. Please do let us know
            if you&apos;d like us to prioritize.
         </p>
      </div>
   );
}
