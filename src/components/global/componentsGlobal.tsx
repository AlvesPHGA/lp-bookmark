import React from 'react';
import { blueBack, cta, link } from './componentsGlobalStyle';
import Link from 'next/link';
import {
   BlueBackProps,
   ContainerProps,
   CTAProps,
   LinkProps,
} from './global-interfaces';

export function Nav({ links }: LinkProps) {
   return (
      <nav
         role="navigation"
         aria-label="menu principal"
         className="space-x-5 ml:flex ml:flex-col ml:space-x-0 ml:items-center ml:gap-5"
      >
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

export function BlueBack({ position }: BlueBackProps) {
   return <div className={blueBack({ position })} />;
}

export function CTA({ type, children }: CTAProps) {
   return (
      <Link href="#" className={cta({ type })}>
         {children}
      </Link>
   );
}
