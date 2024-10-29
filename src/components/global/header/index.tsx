'use client';

import Button from '@/components/form/button';
import { Container, Nav } from '../componentsGlobal';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { headerStyle, menu } from './style';
import React from 'react';

const { header, container, image, hanburger, nav } = headerStyle();

export default function Header() {
   const [active, setActive] = React.useState(false);

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
            <button onClick={() => setActive(!active)} className={hanburger()}>
               <Menu className="md:size-8" />
            </button>

            <div className={nav({ active })}>
               <Nav links="header" />
               <Button place="header">Login</Button>
            </div>
         </div>
      </header>
   );
}
