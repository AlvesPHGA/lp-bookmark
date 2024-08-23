import { tv } from 'tailwind-variants';

export const container = tv({
   base: 'max-w-7xl flex justify-between mx-auto relative z-10',

   variants: {
      items_position: {
         initial: 'items-start',
         center: 'items-center',
      },

      flex_direction: {
         column: 'flex-col',
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

export const blueBack = tv({
   base: 'absolute w-[37%] h-96 bg-blue-600 bottom-0  z-0',

   variants: {
      position: {
         intro: 'right-0 rounded-bl-[10rem]',
         features: 'left-0 rounded-br-[10rem]',
      },
   },
});

export const cta = tv({
   base: 'block w-fit px-5 py-2  font-medium rounded-md  text-base drop-shadow-lg border  hover:bg-transparent  transition',

   variants: {
      type: {
         blue: 'text-slate-300 bg-blue-600 border-blue-600 hover:text-blue-600',
         gray: 'bg-slate-200 text-slate-400 border-slate-200 hover:border-slate-400',
         small: 'text-slate-300 bg-blue-600 px-6 py-3 border-blue-600 hover:text-blue-600',
      },
   },
});
