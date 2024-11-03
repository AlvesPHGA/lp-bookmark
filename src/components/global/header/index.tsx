'use client';

import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { headerStyle } from './style';
import React from 'react';
import useMedia from '@/hook/use-media';
import { MenuDesktop, MenuMobile } from './menu';
import HeaderDesktop from './headerDesktop';
import HeaderMobile from './headerMobile';

const { header } = headerStyle();

export default function Header() {
   const mobile = useMedia('(max-width: 425px)');

   return (
      <header className={header()}>
         {mobile ? <HeaderMobile /> : <HeaderDesktop />}
      </header>
   );
}
