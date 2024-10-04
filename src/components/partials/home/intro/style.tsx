import { tv } from 'tailwind-variants';

export const intro = tv({
   slots: {
      base: 'pb-44 pt-48 relative lg:w-full lg:pb-28 lg:pt-32',
      title: 'text-5xl text-blue-950 font-medium lg:text-4xl',
      text_box: 'w-11/12 mt-8 space-y-6 lg:space-y-5 lg:mt-6',
      img_box:
         'w-[50rem] h-[37.5rem] absolute -right-16 z-10 lg:w-[32rem] lg:h-[25rem]',
   },
});
