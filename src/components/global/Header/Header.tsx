import Logo from '../../../assets/logo-bookmark.svg';
import { Button } from '../../Form/Button/Button';
import { Nav } from '../../Nav/Nav';

export function Header() {
   return (
      <header className="py-6">
         <div className="w-[1200px] flex items-center justify-between mx-auto">
            <img src={Logo} alt="" />
            <div className="flex items-center gap-10">
               <Nav />
               <Button className="__button uppercase font-medium  px-7 py-1 rounded tracking-[0.1em]">
                  Login
               </Button>
            </div>
         </div>
      </header>
   );
}
