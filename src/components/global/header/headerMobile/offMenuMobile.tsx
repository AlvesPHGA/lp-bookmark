import Image from 'next/image';
import { headerStyle, menuMobileStyle, menuStyle } from '../style';
import { Menu } from 'lucide-react';
import ButtonMenu from './buttonMenu';

interface OffMenuMobileProps {
   actionMenu: () => void;
}

const { image } = headerStyle();
const { offMenuMobile } = menuMobileStyle();

export default function OffMenuMobile({ actionMenu }: OffMenuMobileProps) {
   return (
      <div className={offMenuMobile()}>
         <div className={image()}>
            <Image
               src="./logo-bookmark.svg"
               alt="logo Bookmark"
               fill
               className="object-fill"
            />
         </div>

         <ButtonMenu onClick={actionMenu} icon={Menu} />
      </div>
   );
}
