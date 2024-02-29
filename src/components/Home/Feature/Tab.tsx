// import { IDefault } from '../../../pages/Home';

import { ContentTab } from './ContentTab';

import { Content_Tabs as Contents } from '../../../../content.mock.json';
import React from 'react';
import { TabButton } from './TabButton';

const titleTab = ['Simple Bookmark', 'Speedy Searching', 'Easy Sharing'];

// export interface ITab {
//    title: string;
//    text: string;
// }

export function Tab() {
   // const [activeTab, setActiveTab] = React.useState('');

   // function activeTabContent(index) {
   //    const elementTab = document.querySelectorAll('.__content-tab');

   //    elementTab.forEach((tab) => tab.classList.remove('__activeContent-tab'));

   //    elementTab[index].classList.add('__activeContent-tab');
   // }

   // function handleClick({ target }) {
   //    const btn = document.querySelectorAll('.__button-tab button');

   //    setActiveTab(target.classList.add('__active'));

   //    btn.forEach((t, i) => t === target && activeTabContent(i));
   // }

   return (
      <div className="pt-5 w-full">
         <div className="w-fit mx-auto border-b border-b-grayishBlue __button-tab">
            {titleTab.map((title, index) => (
               <TabButton key={index} legend={title} />
               // <button
               //    key={index}
               //    className={`text-grayishBlue text-lg px-10 py-3 cursor-pointer transition-all hover:text-softRed ${
               //       activeTab ? activeTab : ''
               //    }`}
               //    onClick={handleClick}
               // >
               //    {title}
               // </button>
            ))}
         </div>
         {Contents.map((content, index) => (
            <ContentTab key={index} {...content} />
         ))}
      </div>
   );
}
