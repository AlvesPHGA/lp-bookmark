import ErrorAlert from '@/helper/error-alert';
import React from 'react';

interface FieldInputProps extends React.ComponentProps<'input'> {
   name: string;
   aria: string;
   alert: boolean;
}

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
            className="py-2 pl-2 w-64 outline-none rounded-l-md border border-zinc-700"
         />

         <ErrorAlert alert={alert} />
      </div>
   );
}
