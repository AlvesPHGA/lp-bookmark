import { tv } from 'tailwind-variants';

export const features = tv({
   slots: {
      feature: 'py-44 relative lg:pt-24 lg:pb-32 md:pt-10 ml:pb-20 ms:py-10',
      container:
         'max-w-7xl flex justify-between mx-auto relative z-10 flex-col lg:max-w-4xl md:w-full md:px-6 ml:px-4 ml:w-full',
      content: 'text-center space-y-5 md:space-y-3',
      text_box: 'w-5/12 text-center mx-auto md:w-4/6 ml:w-full',
   },
});

export const featuresTab = tv({
   slots: {
      base: 'w-full mx-auto space-y-16 mt-16 lg:mt-14 md:space-y-12 md:mt-10',
      tabs_box: 'flex mx-auto items-center w-fit ml:flex-col ml:w-full',
      content_box:
         'pr-20 flex flex-col justify-center gap-5 lg:pr-16 md:pr-0 ml:text-center ml:w-80 ml:mx-auto items-center ms:w-full',
   },
});

export const tab = tv({
   base: 'py-6 px-12 font-medium text-base text-slate-500 hover:text-red-500 transition relative ml:first:border-t ml:border-b ml:w-full ml:px-0 ml:block mm:py-3',

   variants: {
      isActive: {
         true: 'text-blue-950 after:absolute after:w-full after:h-1 after:bottom-0 after:left-0 after:bg-red-500 after:content-[" "] ml:after:w-[60%] ml:after:left-[50%] ml:after:-translate-x-[50%]',
      },
   },

   defaultVariants: {
      isActive: false,
   },
});

export const contentTab = tv({
   base: 'hidden',

   variants: {
      tab: {
         content:
            'justify-center gap-20 grid-cols-[600px_500px] lg:grid-cols-[400px_400px] lg:justify-between md:grid-cols-[320px_320px] ml:flex-col',
      },

      isActiveTab: {
         true: 'grid ml:flex',
      },
   },

   defaultVariants: {
      isActiveTab: false,
   },
});

export const imageBox = tv({
   slots: {
      box: 'w-[50rem] h-[37.5rem] first:h-[25rem] lg:w-[440px] lg:first:h-[320px] lg:h-[380px] md:w-80 md:first:h-60 md:h-52 ml:w-80 ml:mx-auto ml:h-fit mm:w-full ms:first:h-56 ms:h-fit',
      img: '!relative ml:object-fill',
   },
});
