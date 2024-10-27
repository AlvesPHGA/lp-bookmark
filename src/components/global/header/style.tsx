import { tv } from 'tailwind-variants';

export const headerStyle = tv({
   slots: {
      header: 'py-5 md:py-4',
      container:
         'max-w-7xl flex justify-between mx-auto relative z-10 lg:max-w-4xl md:w-full md:px-6 ml:px-4 items-center',
      image: 'h-7 w-40 relative',
      nav: 'flex gap-7 items-center md:gap-10 ml:hidden',
   },
});

export const menu = tv({
   base: 'hidden ml:block',
});
