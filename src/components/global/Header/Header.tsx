import Logo from '../../../assets/logo-bookmark.svg';
import { Button } from '../../Button/Button';

const menuNav = ['Features', 'Pricing', 'Contact'];

export function Header() {
   return (
      <header className="py-6">
         <div className="w-[1200px] flex items-center justify-between mx-auto">
            <img src={Logo} alt="" />
            <div className="flex items-center gap-10">
               <nav>
                  {menuNav.map((nav, index) => (
                     <a
                        key={index}
                        href="/nav"
                        className="uppercase mr-10 last:mr-0 text-veryDarkBlue font-normal tracking-[.05em] hover:text-softRed"
                     >
                        {nav}
                     </a>
                  ))}
               </nav>
               <Button legend="Login" />
            </div>
         </div>
      </header>
   );
}
