import React from 'react';
import { ButtonProps } from './interfaces';

export default function Button({ children }: ButtonProps) {
   return (
      <button className="block px-6 py-1 uppercase rounded-md tracking-wider border border-red-500 bg-red-500 text-white font-medium hover:text-red-500 hover:bg-transparent transition">
         {children}
      </button>
   );
}
