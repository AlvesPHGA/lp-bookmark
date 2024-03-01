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
   const [activeTab, setActiveTab] = React.useState(0);
   const [tabContent, setTabContent] = React.useState(0);

   function handleClickTabButton(index: number) {
      setActiveTab(index);
      setTabContent(index);
   }

   return (
      <div className="pt-5 w-full">
         <div className="w-fit mx-auto border-b border-b-grayishBlue __button-tab">
            {titleTab.map((title, index) => (
               <TabButton
                  key={index}
                  legend={title}
                  onClick={() => handleClickTabButton(index)}
                  isActive={index === activeTab}
               />
            ))}
         </div>
         {Contents.map((content, index) => (
            <ContentTab
               key={index}
               {...content}
               isActive={index === tabContent}
            />
         ))}
      </div>
   );
}
