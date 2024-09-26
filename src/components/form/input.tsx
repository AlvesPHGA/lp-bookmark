import ErrorAlert from '@/helper/error-alert';
import React from 'react';
import { FieldInputProps } from './interfaces';

export function FieldInput({ name, aria, alert, ...props }: FieldInputProps) {
   return (
      <div className="flex gap-2 items-center">
         <label htmlFor={name} className="hidden">
            {name}
         </label>
         <input
            type="text"
            aria-label={aria}
            name={name}
            id={name}
            placeholder={props.placeholder}
            className="py-2 pl-2 w-72 outline-none rounded-l-md bg-transparent"
         />

         <ErrorAlert alert={alert} />
      </div>
   );
}
