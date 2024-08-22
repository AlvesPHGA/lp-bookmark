import React from 'react';
import { container, link } from './componentsGlobalStyle';
import Link from 'next/link';
import { ContainerProps, LinkProps } from './global-interfaces';

export function Container({ children }: ContainerProps) {
   return <div className={container()}>{children}</div>;
}

export function Nav({ links }: LinkProps) {
   return (
      <nav className="space-x-5">
         <Link className={link({ links })} href="#">
            Features
         </Link>
         <Link className={link({ links })} href="#">
            Pricing
         </Link>
         <Link className={link({ links })} href="#">
            Contact
         </Link>
      </nav>
   );
}
