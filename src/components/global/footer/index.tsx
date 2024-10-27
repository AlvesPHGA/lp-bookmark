import Image from 'next/image';
import { Nav } from '../componentsGlobal';
import { Facebook, Twitter } from 'lucide-react';
import Link from 'next/link';
import { footerStyle } from './footerStyle';

const {
   footer,
   container,
   logo_nav_box,
   logo,
   social_media_box,
   social_media,
} = footerStyle();

export function Footer() {
   return (
      <footer className={footer()}>
         <div className={container()}>
            <div className={logo_nav_box()}>
               <div className={logo()}>
                  <Image
                     src="./logo-bookmark-footer.svg"
                     alt="logo Bookmark"
                     fill
                     className="object-fill"
                  />
               </div>

               <Nav links="footer" />
            </div>

            <div className={social_media_box()}>
               <Link href="#">
                  <Facebook className={social_media()} />
               </Link>

               <Link href="#">
                  <Twitter className={social_media()} />
               </Link>
            </div>
         </div>
      </footer>
   );
}
