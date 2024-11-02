import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { headerStyle } from './style';

const { image, hamburger } = headerStyle();

interface HeaderMobileProps {
   menuMobile: () => void;
   active: boolean;
}

export default function HeaderMobile({
   menuMobile,
   active,
}: HeaderMobileProps) {
   return (
      <div className="w-full flex justify-between">
         {active ? (
            <div>
               <div>
                  <div className="h-7 w-40 relative">
                     <Image
                        src="./logo-bookmark-footer.svg"
                        alt="logo Bookmark"
                        fill
                        className="object-fill"
                     />
                  </div>
                  <button onClick={menuMobile} className={hamburger()}>
                     <X className="size-8" />
                  </button>
               </div>
            </div>
         ) : (
            <>
               <div className={image()}>
                  <Image
                     src="./logo-bookmark.svg"
                     alt="logo Bookmark"
                     fill
                     className="object-fill"
                  />
               </div>

               <button onClick={menuMobile} className={hamburger()}>
                  <Menu className="size-8" />
               </button>
            </>
         )}
      </div>
   );
}
