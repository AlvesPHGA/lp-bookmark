import { cta } from '@/components/global/componentsGlobalStyle';
import { featuresTab, text, title } from '../../homeStyles';
import Link from 'next/link';

const { content_box } = featuresTab();

export function Content() {
   return (
      <div className={content_box()}>
         <h3 className={title({ size: 'subtitle' })}>Bookmark in one click</h3>
         <p className={text()}>
            Organize your bookmarks however you like. Our simple drag-and-drop
            interface gives you complete control over how you manage your
            favourite sites.
         </p>
         <Link href="#" className={cta({ type: 'small' })}>
            More Info
         </Link>
      </div>
   );
}
