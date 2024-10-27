import Button from '@/components/form/button';
import { Container, Nav } from '../componentsGlobal';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { headerStyle, menu } from './style';

const { header, container, image, nav } = headerStyle();

export default function Header() {
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
            <Menu className={menu()} />
            <div className={nav()}>
               <Nav links="header" />
               <Button place="header">Login</Button>
            </div>
         </div>
      </header>
   );
}
