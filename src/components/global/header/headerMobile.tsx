import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { headerStyle, menuStyle } from './style';
import { MenuMobile } from './menu';

const { headerMobile, intoHeaderMobile, image, hamburger, icon } =
   headerStyle();
const { onMenuMobile, offMenuMobile } = menuStyle({ menu: 'hidden' });

interface HeaderMobileProps {
   menuMobile: () => void;
   active: boolean;
}

export default function HeaderMobile({
   menuMobile,
   active,
}: HeaderMobileProps) {
   return (
      <div className={headerMobile()}>
         {active ? (
            <div className={onMenuMobile({ active })}>
               <div className={intoHeaderMobile()}>
                  <div className={image()}>
                     <Image
                        src="./logo-bookmark-footer.svg"
                        alt="logo Bookmark"
                        fill
                        className="object-fill"
                     />
                  </div>
                  <button onClick={menuMobile} className={hamburger()}>
                     <X className={icon()} />
                  </button>
               </div>
               <MenuMobile />
            </div>
         ) : (
            <div className={offMenuMobile()}>
               <div className={image()}>
                  <Image
                     src="./logo-bookmark.svg"
                     alt="logo Bookmark"
                     fill
                     className="object-fill"
                  />
               </div>

               <button onClick={menuMobile} className={hamburger()}>
                  <Menu className={icon()} />
               </button>
            </div>
         )}
      </div>
   );
}
