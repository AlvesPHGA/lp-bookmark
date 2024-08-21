import React from 'react';
import { container } from './componentsGlobalStyle';
import Link from 'next/link';

interface ContainerProps extends React.ComponentProps<'div'> {}

export function Container({ children }: ContainerProps) {
   return <div className={container()}>{children}</div>;
}

export function Nav() {
   return (
      <nav className="space-x-5">
         <Link
            className="text-xl uppercase text-blue-950 hover:text-red-500 transition"
            href="#"
         >
            Features
         </Link>
         <Link
            className="text-xl uppercase text-blue-950 hover:text-red-500 transition"
            href="#"
         >
            Pricing
         </Link>
         <Link
            className="text-xl uppercase text-blue-950 hover:text-red-500 transition"
            href="#"
         >
            Contact
         </Link>
      </nav>
   );
}
