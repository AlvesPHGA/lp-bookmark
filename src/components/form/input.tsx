import React from 'react';

interface FieldInputProps extends React.ComponentProps<'input'> {
   name: string;
   aria: string;
}

export function FieldInput({ name, aria, ...props }: FieldInputProps) {
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
            className="py-2 pl-2 w-64 border-none outline-none rounded-l-md"
         />

         <span className="py-0.5 px-3 text-base text-white font-medium rounded-[50%] text-wrap bg-red-500 mr-1">
            !
         </span>
      </div>
   );
}
