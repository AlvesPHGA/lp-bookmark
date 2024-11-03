import { menuMobileStyle, menuStyle } from '../style';
import { MenuMobile } from '../menu';
import OnHeaderMobile from './onHeaderMobile';

interface OnMenuMobileProps {
   active: boolean;
   actionMenu: () => void;
}

const { onMenuMobile } = menuMobileStyle({ menu: 'hidden' });

export default function OnMenuMobile({
   active,
   actionMenu,
}: OnMenuMobileProps) {
   return (
      <div className={onMenuMobile({ active })}>
         <OnHeaderMobile actionMenu={actionMenu} />
         <MenuMobile />
      </div>
   );
}
