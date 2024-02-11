import { SimpleBookmark } from '../components/Home/SimpleBookmark/SimpleBookmark';

import {
   SimpleBookmarkManager as SBM,
   Features as Feature,
   Download as Down,
   FrequentlyAskedQuestion as FAQ,
   Contact as Contacts,
} from '../../content.mock.json';

import { Features } from '../components/Home/Feature/Feature';
import { Download } from '../components/Home/Download/Download';
import { FrequentlyAskedQuestions } from '../components/Home/FrequentlyAskedQuestions/FrequentlyAskedQuestions';
import { Contact } from '../components/Home/Contact/Contact';

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
         <Contact {...Contacts} />
      </div>
   );
}
