import React, { ReactNode } from 'react';
import { featuresTab, tab } from '../style';

interface TabProps extends React.ComponentProps<'button'> {
   children: ReactNode;
   isActive: boolean;
}

export function Tab({ children, isActive, ...rest }: TabProps) {
   return (
      <button {...rest} className={tab({ isActive })}>
         {children}
      </button>
   );
}
