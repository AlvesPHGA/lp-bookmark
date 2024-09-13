import { tv } from 'tailwind-variants';

export const buttonStyle = tv({
   base: 'block   rounded-md tracking-wider border border-red-500 bg-red-500 text-white font-medium hover:text-red-500 hover:bg-transparent transition',

   variants: {
      place: {
         header: 'uppercase px-6 py-1',
         contact: 'h-[45px] px-7 hover:bg-white',
      },

      status: {
         block: 'pointer-events-none cursor-wait opacity-70',
      },
   },
});
