// import { IDefault } from '../../../pages/Home';

import { ContentTab } from './ContentTab';

const titleTab = ['Simple Bookmark', 'Speedy Searching', 'Easy Sharing'];

// export interface ITab {
//    title: string;
//    text: string;
// }

export function Tab() {
   return (
      <div className="pt-5 w-full">
         <div className="w-fit mx-auto border-b border-b-grayishBlue">
            {titleTab.map((title, index) => (
               <button
                  key={index}
                  className="text-grayishBlue text-lg px-10 py-3 cursor-pointer transition-all hover:text-softRed"
               >
                  {title}
               </button>
            ))}
         </div>
         <ContentTab />
      </div>
   );
}
