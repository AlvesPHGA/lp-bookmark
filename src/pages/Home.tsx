import { SimpleBookmark } from '../components/SimpleBookmark/SimpleBookmark';

import {
   SimpleBookmarkManager as SBM,
   Features as Feature,
   Download as Down,
} from '../../content.mock.json';

import { Features } from '../components/Feature/Feature';
import { Download } from '../components/Home/Download/Download';

export function Home() {
   console.log(SBM);
   return (
      <div>
         <SimpleBookmark {...SBM} />
         <Features {...Feature} />
         <Download {...Down} />
      </div>
   );
}
