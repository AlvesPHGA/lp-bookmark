'use client';

import Link from 'next/link';
import { link } from '../componentsGlobalStyle';
import { LinkProps } from '../global-interfaces';
import Button from '@/components/form/button';
import { menuStyle } from './style';
import Image from 'next/image';
import { Facebook, Twitter, X } from 'lucide-react';
import React from 'react';

const { desktop, navMobile, socialMediaBox, socialMedia } = menuStyle({
   menu: 'hidden',
});

export function MenuDesktop({ links }: LinkProps) {
   return (
      <div className={desktop()}>
         <nav
            role="navigation"
            aria-label="menu principal"
            className="space-x-5"
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

         <Button place="header">Login</Button>
      </div>
   );
}

export function MenuMobile({ active, links }: LinkProps) {
   return (
      <div className="py-10 space-y-10">
         <nav
            role="navigation"
            aria-label="menu principal"
            className={navMobile()}
         >
            <Link
               className={link({
                  links,
                  class: 'block w-full border-y text-center py-3',
               })}
               href="#"
            >
               Features
            </Link>
            <Link
               className={link({
                  links,
                  class: 'block w-full border-b text-center py-3',
               })}
               href="#"
            >
               Pricing
            </Link>
            <Link
               className={link({
                  links,
                  class: 'block w-full border-b text-center py-3',
               })}
               href="#"
            >
               Contact
            </Link>
         </nav>

         <Button place="header">Login</Button>

         <div className={socialMediaBox()}>
            <Link href="#">
               <Facebook className={socialMedia()} />
            </Link>

            <Link href="#">
               <Twitter className={socialMedia()} />
            </Link>
         </div>
      </div>
   );
}
