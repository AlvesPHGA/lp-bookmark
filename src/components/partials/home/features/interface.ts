import { VariantProps } from 'tailwind-variants';
import { contentTab } from './style';
import { ReactNode } from 'react';

export interface TabContainerProps
   extends React.ComponentProps<'div'>,
      VariantProps<typeof contentTab> {
   children: React.ReactNode;
   isActiveTab: boolean;
}

export interface TabProps extends React.ComponentProps<'button'> {
   children: ReactNode;
   isActive: boolean;
}
