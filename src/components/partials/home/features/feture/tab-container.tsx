import React from 'react';
import { contentTab } from '../style';
import { VariantProps } from 'tailwind-variants';

interface TabContainerProps
   extends React.ComponentProps<'div'>,
      VariantProps<typeof contentTab> {
   children: React.ReactNode;
   isActiveTab: boolean;
}

export function TabContainer({
   tab,
   isActiveTab,
   ...children
}: TabContainerProps) {
   return <div className={contentTab({ isActiveTab, tab })} {...children} />;
}
