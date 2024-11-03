import Image from 'next/image';
import { headerStyle } from '../style';
import { X } from 'lucide-react';
import ButtonMenu from './buttonMenu';

interface OnHeaderMobileProps {
   actionMenu: () => void;
}

const { intoHeaderMobile, image } = headerStyle();

export default function OnHeaderMobile({ actionMenu }: OnHeaderMobileProps) {
   return (
      <div className={intoHeaderMobile()}>
         <div className={image()}>
            <Image
               src="./logo-bookmark-footer.svg"
               alt="logo Bookmark"
               fill
               className="object-fill"
            />
         </div>
         <ButtonMenu onClick={actionMenu} icon={X} />
      </div>
   );
}
