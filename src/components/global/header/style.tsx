import { tv } from 'tailwind-variants';

export const headerStyle = tv({
   slots: {
      header: 'py-5 md:h-20 md:flex justify-center items-center',
      container:
         'max-w-7xl flex justify-between mx-auto relative lg:max-w-4xl md:w-full md:px-6 ml:px-4 items-center',
      image: 'h-7 w-40 relative',
      hanburger: 'hidden ml:block p-1',
      nav: 'flex gap-7 items-center md:gap-10 md:absolute md:flex-col md:w-full md:left-0 md:top-20 z-[100] md:bg-white md:h-[calc(100vh-80px)]',
   },

   variants: {
      active: {
         false: 'md:hidden',
         true: 'md:flex',
      },
   },

   defaultVariants: {
      active: false,
   },
});

export const menu = tv({
   base: 'hidden ml:block',
});
