import { SimpleBookmark } from '../components/SimpleBookmark/SimpleBookmark';

import {
   SimpleBookmarkManager as SBM,
   Features as Feature,
   Download as Down,
   FrequentlyAskedQuestion as FAQ,
} from '../../content.mock.json';

import { Features } from '../components/Feature/Feature';
import { Download } from '../components/Home/Download/Download';
import { FrequentlyAskedQuestions } from '../components/Home/FrequentlyAskedQuestions/FrequentlyAskedQuestions';

export interface IDefault {
   title: string;
   text: string;
}

export function Home() {
   return (
      <div>
         <SimpleBookmark {...SBM} />
         <Features {...Feature} />
         <Download {...Down} />
         <FrequentlyAskedQuestions {...FAQ} />
      </div>
   );
}
