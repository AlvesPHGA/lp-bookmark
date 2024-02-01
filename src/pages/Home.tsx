import { SimpleBookmark } from '../components/SimpleBookmark/SimpleBookmark';

import {
   SimpleBookmarkManager as SBM,
   Features as Feature,
} from '../../content.mock.json';
import { Features } from '../components/Feature/Feature';

export function Home() {
   console.log(SBM);
   return (
      <div className="h-screen">
         <SimpleBookmark {...SBM} />
         <Features {...Feature} />
      </div>
   );
}
