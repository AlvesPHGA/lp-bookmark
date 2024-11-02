import { tv } from 'tailwind-variants';

export const baseContainer = tv({
   base: 'max-w-7xl flex justify-between mx-auto relative z-10 lg:max-w-4xl md:w-full md:px-6 ml:px-4',
});

export const link = tv({
   base: 'text-xl uppercase hover:text-red-500 transition md:text-lg',

   variants: {
      links: {
         header: 'text-blue-950',
         footer: 'text-white',
      },
   },
});

export const blueBack = tv({
   base: 'absolute w-[37%] h-96 bg-blue-600 bottom-0 z-0 lg:w-[30%] lg:h-80 md:h-64',

   variants: {
      position: {
         intro: 'right-0 rounded-bl-[10rem] ml:top-32 ml:w-[340px] ml:h-56 ml:rounded-bl-[5rem] mm:w-80 mm:h-48 mm:top-28 ms:top-20 ms:w-60 ms:h-44',
         features:
            'w-[46%] left-0 rounded-br-[10rem] bottom-20 ml:bottom-[340px] ml:w-[280px] ml:rounded-br-[5rem] ml:h-56 mm:bottom-72 ms:h-40 ms:w-64 ms:bottom-[276px]',
      },
   },
});

export const cta = tv({
   base: 'block w-fit px-5 py-2  font-medium rounded-md  text-base drop-shadow-lg  hover:bg-transparent  transition md:px-2 md:py-2 mm:text-sm mm:px-3',

   variants: {
      type: {
         blue: 'text-slate-300 bg-blue-600 border-blue-600 hover:text-blue-600',
         gray: 'bg-slate-200 text-slate-400 border-slate-200 hover:border-slate-400',
         small: 'text-slate-300 bg-blue-600 px-6 py-3 border-blue-600 hover:text-blue-600 drop-shadow-none',
      },
   },
});
