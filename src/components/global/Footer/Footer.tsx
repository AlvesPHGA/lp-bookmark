import LogoSite from '../../../assets/logo-bookmark_01.svg';
import FB from '../../../assets/icon-facebook.svg';
import Twitter from '../../../assets/icon-twitter.svg';

import { ReactSVG } from 'react-svg';

// import { LogoBookmark } from '../../Icons/LogoBookmark';

const linkNav = ['Features', 'Pricing', 'Contact'];

export function Footer() {
   return (
      <footer className="bg-veryDarkBlue py-5">
         <div className="w-[1200px] flex items-center justify-between mx-auto">
            <div className="flex items-center gap-16">
               <ReactSVG src={LogoSite} />
               <div>
                  {linkNav.map((link) => (
                     <a
                        href=""
                        key={link}
                        className="uppercase text-base mr-10 last:mr-0 text-white font-normal tracking-[.05em] hover:text-softRed"
                     >
                        {link}
                     </a>
                  ))}
               </div>
            </div>

            <div className="flex items-center gap-8">
               <ReactSVG src={FB} className="cursor-pointer" />
               <ReactSVG src={Twitter} className="cursor-pointer" />
            </div>
         </div>
      </footer>
   );
}
