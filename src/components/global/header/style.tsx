import { tv } from 'tailwind-variants';
import { baseContainer } from '../componentsGlobalStyle';

export const headerStyle = tv({
   slots: {
      header: 'py-5 ml:py-4 md:flex justify-center items-center ml:px-4',
      container: [baseContainer(), 'items-center'],
      image: 'h-7 w-40 relative',
      hamburger: 'hidden ml:block p-1 relative z-[100]',
   },
});

const baseMenuStyle = tv({
   base: 'gap-7 items-center',
});

export const menuStyle = tv({
   slots: {
      desktop: [baseMenuStyle(), 'flex'],
      mobile: [
         baseMenuStyle(),
         'ml:flex-col ml:fixed ml:w-full ml:left-0 ml:top-0 ml:z-50 ml:bg-[rgba(23,37,84,0.9)] ml:h-[100vh] pt-5 text-white ml:px-4',
      ],
      navMobile: 'flex items-center flex-col w-full pt-5',
      socialMediaBox: 'flex gap-5 items-center ml:mt-10',
      socialMedia: 'size-11 text-white',
   },

   variants: {
      menu: {
         hidden: {
            mobile: 'hidden',
         },
      },

      active: {
         true: {
            mobile: 'flex',
         },
      },
   },
});
