'use client';

import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { headerStyle } from './style';
import React from 'react';
import useMedia from '@/hook/use-media';
import { MenuDesktop, MenuMobile } from './menu';
import HeaderMobile from './headerMobile';
import HeaderDesktop from './headerDesktop';

const { header, container, image, hamburger } = headerStyle();

export default function Header() {
   const [active, setActive] = React.useState(false);

   const mobile = useMedia('(max-width: 425px)');

   function menuMobile() {
      setActive(!active);
   }

   return (
      <header className={header()}>
         {mobile ? (
            <HeaderMobile menuMobile={menuMobile} active={active} />
         ) : (
            <HeaderDesktop />
         )}
      </header>
   );
}
