import { ButtonHTMLAttributes, ElementType } from 'react';
import { headerStyle } from '../style';

interface ButtonMenuProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   icon: ElementType;
}

const { intoHeaderMobile, image, buttonMenu, icon } = headerStyle();

export default function ButtonMenu({ icon: Icon, ...rest }: ButtonMenuProps) {
   return (
      <button {...rest} className={buttonMenu()}>
         <Icon className={icon()} />
      </button>
   );
}
