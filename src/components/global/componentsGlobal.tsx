import React from 'react';
import { container, link } from './componentsGlobalStyle';
import Link from 'next/link';
import { VariantProps } from 'tailwind-variants';

interface ContainerProps extends React.ComponentProps<'div'> {}

export function Container({ children }: ContainerProps) {
   return <div className={container()}>{children}</div>;
}

interface LinkProps
   extends React.ComponentProps<'a'>,
      VariantProps<typeof link> {}

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
