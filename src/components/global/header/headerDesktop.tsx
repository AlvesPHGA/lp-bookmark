import Image from 'next/image';
import { headerStyle } from './style';
import { MenuDesktop } from './menu';

const { container, image } = headerStyle();

export default function HeaderDesktop() {
   return (
      <div className={container()}>
         <div className={image()}>
            <Image
               src="./logo-bookmark.svg"
               alt="logo Bookmark"
               fill
               className="object-fill"
            />
         </div>
         <MenuDesktop />
      </div>
   );
}
