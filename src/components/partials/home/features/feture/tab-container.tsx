import React from 'react';
import { contentTab } from '../style';
import { TabContainerProps } from '../interface';

export function TabContainer({
   tab,
   isActiveTab,
   ...children
}: TabContainerProps) {
   return <div className={contentTab({ isActiveTab, tab })} {...children} />;
}
