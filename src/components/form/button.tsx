import React from 'react';
import { ButtonProps } from './interfaces';
import { buttonStyle } from './formStyles';

export default function Button({ place, status, children }: ButtonProps) {
   return (
      <button role="button" className={buttonStyle({ place, status })}>
         {children}
      </button>
   );
}
