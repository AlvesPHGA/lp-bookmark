import React from 'react';
import { blueBack, container, link } from './componentsGlobalStyle';
import Link from 'next/link';
import { BlueBackProps, ContainerProps, LinkProps } from './global-interfaces';

export function Container({
   items_position,
   flex_direction,
   children,
}: ContainerProps) {
   return (
      <div className={container({ items_position, flex_direction })}>
         {children}
      </div>
   );
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

export function BlueBack({ position }: BlueBackProps) {
   return <div className={blueBack({ position })} />;
}
