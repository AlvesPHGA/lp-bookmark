const menuNav = ['Features', 'Pricing', 'Contact'];

export function Nav() {
   return (
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
   );
}
