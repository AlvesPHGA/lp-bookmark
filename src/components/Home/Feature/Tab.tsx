// import { IDefault } from '../../../pages/Home';

import { ContentTab } from './ContentTab';

import { Content_Tabs as Contents } from '../../../../content.mock.json';
import React from 'react';

const titleTab = ['Simple Bookmark', 'Speedy Searching', 'Easy Sharing'];

// export interface ITab {
//    title: string;
//    text: string;
// }

export function Tab() {
   const [activeTab, setActiveTab] = React.useState(null);

   function handleClick({ target }) {
      const elementTab = document.querySelectorAll('.__button-tab button');

      elementTab.forEach((el) => {
         if (el === target) console.log(target);
      });
   }
   return (
      <div className="pt-5 w-full">
         <div className="w-fit mx-auto border-b border-b-grayishBlue __button-tab">
            {titleTab.map((title, index) => (
               <button
                  key={index}
                  className="text-grayishBlue text-lg px-10 py-3 cursor-pointer transition-all hover:text-softRed"
                  onClick={handleClick}
               >
                  {title}
               </button>
            ))}
         </div>
         {Contents.map((content, index) => (
            <ContentTab key={index} {...content} />
         ))}
      </div>
   );
}
