import { SimpleBookmark } from '../components/SimpleBookmark/SimpleBookmark';

import { SimpleBookmarkManager as SBM } from '../../content.mock.json';

export function Home() {
   console.log(SBM);
   return (
      <>
         <SimpleBookmark {...SBM} />
      </>
   );
}
