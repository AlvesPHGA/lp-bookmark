import { tv } from 'tailwind-variants';

export const title = tv({
   base: 'text-5xl text-blue-950 font-medium',

   variants: {
      size: {
         subtitle: 'text-3xl md:text-2xl',
         subtitle_two: 'text-xl mt-5 mb-1 ',
      },

      color: {
         white: 'text-white',
      },
   },
});

export const text = tv({
   base: 'text-slate-400 md:text-base mm:text-sm',

   variants: {
      size: {
         sm: 'text-sm',
      },
   },
});
