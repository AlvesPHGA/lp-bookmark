'use client';

import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { headerStyle } from './style';
import React from 'react';
import useMedia from '@/hook/use-media';
import { MenuDesktop, MenuMobile } from './menu';

const { header, container, image, hamburger } = headerStyle();

export default function Header() {
   const [active, setActive] = React.useState(false);

   const mobile = useMedia('(max-width: 425px)');

   function menuMobile() {
      setActive(!active);
   }

   return (
      <header className={header()}>
         <div className={container()}>
            <div className={image()}>
               <Image
                  src="./logo-bookmark.svg"
                  alt="logo Bookmark"
                  fill
                  className="object-fill"
               />
            </div>

            {mobile && (
               <button onClick={menuMobile} className={hamburger()}>
                  {active ? (
                     <X className="size-8 relative z-[100] text-white" />
                  ) : (
                     <Menu className="size-8" />
                  )}
               </button>
            )}

            {mobile ? <MenuMobile active={active} /> : <MenuDesktop />}
         </div>
      </header>
   );
}
