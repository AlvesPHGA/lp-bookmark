import React from 'react';
import { tab } from '../style';
import { TabProps } from '../interface';

export function Tab({ children, isActive, ...rest }: TabProps) {
   return (
      <button {...rest} className={tab({ isActive })}>
         {children}
      </button>
   );
}
