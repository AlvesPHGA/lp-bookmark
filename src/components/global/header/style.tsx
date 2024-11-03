import { tv } from 'tailwind-variants';
import { baseContainer } from '../componentsGlobalStyle';

export const headerStyle = tv({
   slots: {
      header: 'py-5 ml:py-4 md:flex justify-center items-center ml:px-4',
      headerMobile: 'w-full flex justify-between',
      intoHeaderMobile: 'flex justify-between items-center w-full',
      container: [baseContainer(), 'items-center'],
      image: 'h-7 w-40 relative',
      buttonMenu: 'hidden ml:block p-1 relative z-[100]',
      icon: 'size-8',
   },
});

const baseMenuStyle = tv({
   base: 'gap-7 items-center',
});

export const menuStyle = tv({
   slots: {
      desktop: [baseMenuStyle(), 'flex'],
      navMobile: 'flex items-center flex-col w-full pt-5',
      socialMediaBox: 'flex justify-center gap-5 items-center ml:mt-10',
      socialMedia: 'size-11 text-white',
   },
});

export const menuMobileStyle = tv({
   slots: {
      onMenuMobile: [
         baseMenuStyle(),
         'ml:flex-col ml:fixed ml:w-full ml:left-0 ml:top-0 ml:z-50 ml:bg-[rgba(23,37,84,0.9)] ml:h-[100vh] pt-5 text-white ml:px-4 overflow-y-hidden',
      ],

      offMenuMobile: 'flex items-center justify-between w-full',
   },

   variants: {
      menu: {
         hidden: {
            onMenuMobile: 'translate-x-[100%] transition ease-in',
         },
      },

      active: {
         true: {
            onMenuMobile: 'flex translate-x-0',
         },
      },
   },
});
