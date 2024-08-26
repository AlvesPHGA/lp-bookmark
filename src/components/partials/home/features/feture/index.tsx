'use client';

import { Tab } from './tab';
import { ContentTab } from './contentTab';
import { featuresTab } from '../style';
import React from 'react';

const { base, tabs_box } = featuresTab();

const tabs = ['Simple Bookmarking', 'Speedy Searching', 'Easy Sharing'];

export function Feature() {
   const [active, setActive] = React.useState(0);

   function handleTab(i: number) {
      setActive(i);
   }

   return (
      <div className={base()}>
         <div className={tabs_box()}>
            {tabs.map((n, i) => (
               <Tab
                  key={i}
                  isActive={i === active}
                  onClick={() => handleTab(i)}
               >
                  {n}
               </Tab>
            ))}
         </div>
         <ContentTab />
      </div>
   );
}
