import { tv } from 'tailwind-variants';

export const container = tv({
   base: 'max-w-7xl flex justify-between mx-auto relative',

   variants: {
      items_position: {
         initial: 'items-start',
         center: 'items-center',
      },
   },

   defaultVariants: {
      items_position: 'initial',
   },
});

export const link = tv({
   base: 'text-xl uppercase hover:text-red-500 transition',

   variants: {
      links: {
         header: 'text-blue-950',
         footer: 'text-white',
      },
   },
});
