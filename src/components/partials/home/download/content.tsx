import { text, title } from '../homeStyles';
import { download } from './style';

const { content_box } = download();

export function Content() {
   return (
      <div className={content_box()}>
         <h2 className={title({ size: 'subtitle' })}>Download the extension</h2>

         <p className={text()}>
            We&apos;ve got more browser in the pipeline. Please do let us know
            if you&apos;d like us to prioritize.
         </p>
      </div>
   );
}
