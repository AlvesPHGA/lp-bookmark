import { tv } from 'tailwind-variants';

export const intro = tv({
   slots: {
      base: 'pb-44 pt-48 relative lg:w-full lg:pb-28 lg:pt-32 md:pt-16 md:pb-16',
      container:
         'max-w-7xl flex justify-between mx-auto relative z-10 lg:max-w-4xl md:w-full md:px-6 ml:px-4 items-center ml:flex-col-reverse ml:gap-16',
      title: 'text-5xl text-blue-950 font-medium lg:text-4xl md:text-3xl',
      text_box:
         'w-11/12 mt-8 space-y-6 lg:space-y-5 lg:mt-6 md:w-full ml:w-full',
      img_box:
         'w-[50rem] h-[37.5rem] absolute -right-16 z-10 lg:w-[32rem] lg:h-[25rem] md:w-[350px] md:h-[300px] md:right-0 ml:static ml:w-full ml:h-fit',
      img_intro: 'w-full ml:w-64 !sticky',
   },
});
