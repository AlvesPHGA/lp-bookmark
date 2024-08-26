import React from 'react';
import { ButtonProps } from './interfaces';
import { buttonStyle } from './formStyles';

export default function Button({ place, children }: ButtonProps) {
   return <button className={buttonStyle({ place })}>{children}</button>;
}
