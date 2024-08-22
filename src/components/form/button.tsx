import React from 'react';
import { ButtonProps } from './interfaces';
import { buttonStyle } from './formStyles';

export default function Button({ children }: ButtonProps) {
   return <button className={buttonStyle()}>{children}</button>;
}
