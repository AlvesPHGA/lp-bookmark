import React from 'react';

type CTAProps = React.ComponentProps<'a'> & {
   children: string;
   className: string;
};
export function CTA({ children, className }: CTAProps) {
   return (
      <a
         href=""
         className={`block border-2 w-fit py-3 px-6 rounded text-base font-medium hover:transition-all ${className}`}
      >
         {children}
      </a>
   );
}
