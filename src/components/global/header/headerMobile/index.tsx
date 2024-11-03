import React from 'react';
import { headerStyle } from '../style';
import OffMenuMobile from './offMenuMobile';
import OnMenuMobile from './onMenuMobile';

const { headerMobile } = headerStyle();

export default function HeaderMobile() {
   const [active, setActive] = React.useState(false);

   function actionMenu() {
      setActive(!active);
   }

   React.useEffect(() => {
      if (active) document.body.style.overflow = 'hidden';
      else document.body.style.overflow = 'initial';
   }, [active]);

   return (
      <div className={headerMobile()}>
         {active ? (
            <OnMenuMobile active={active} actionMenu={actionMenu} />
         ) : (
            <OffMenuMobile actionMenu={actionMenu} />
         )}
      </div>
   );
}
