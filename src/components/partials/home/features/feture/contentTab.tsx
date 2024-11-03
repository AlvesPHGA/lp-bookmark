import Image from 'next/image';
import { featuresTab, imageBox } from '../style';
import { title, text } from '../../homeStyles';
import { CTA } from '@/components/global/componentsGlobal';
import React from 'react';
import { TabContainer } from './tab-container';

const { content_box } = featuresTab();
const { box, img } = imageBox();

const content = [
   {
      title: 'Bookmark in one click',
      image: './illustration-features-tab-1.svg',
      text: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
   },
   {
      title: 'Intelligent search',
      image: './illustration-features-tab-2.svg',
      text: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
   },
   {
      title: 'Share your bookmarks',
      image: './illustration-features-tab-3.svg',
      text: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
   },
];

export function ContentTab({ value }: { value: number }) {
   return (
      <>
         {content.map((data, i) => (
            <TabContainer key={i} tab="content" isActiveTab={i === value}>
               <div className={box()}>
                  <Image src={data.image} fill className={img()} alt="" />
               </div>
               <div className={content_box()}>
                  <h3 className={title({ size: 'subtitle' })}>{data.title}</h3>
                  <p className={text()}>{data.text}</p>
                  <CTA type="small">More Info</CTA>
               </div>
            </TabContainer>
         ))}
      </>
   );
}
