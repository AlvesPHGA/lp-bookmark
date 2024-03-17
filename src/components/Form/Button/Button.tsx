import React from 'react';

type ButtonProps = React.ComponentProps<'button'> & {
   className: string;
};

export function Button({ className, children, ...props }: ButtonProps) {
   return (
      <button className={className} {...props}>
         {children}
      </button>
   );
}
