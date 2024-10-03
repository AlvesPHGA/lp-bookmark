import { tv } from 'tailwind-variants';

export const features = tv({
   slots: {
      content: 'text-center space-y-5',
      text_box: 'w-5/12 text-center mx-auto',
   },
});

export const featuresTab = tv({
   slots: {
      base: 'w-full mx-auto space-y-16 mt-16 lg:mt-14',
      tabs_box: 'flex mx-auto items-center w-fit border-b border-slate-300',
      content_box: 'pr-20 flex flex-col justify-center gap-5 lg:pr-16',
   },
});

export const tab = tv({
   base: 'py-6 px-12 font-medium text-base text-slate-500 hover:text-red-500 transition relative',

   variants: {
      isActive: {
         true: 'text-blue-950 after:absolute after:w-full after:h-1 after:bottom-0 after:left-0 after:bg-red-500 after:content-[" "]',
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
            'justify-center gap-20 grid-cols-[600px_500px] lg:grid-cols-[500px_400px] lg:gap-16',
      },

      isActiveTab: {
         true: 'grid',
      },
   },

   defaultVariants: {
      isActiveTab: false,
   },
});

export const imageTab = tv({
   base: 'w-[50rem] h-[37.5rem] first:h-[25rem] lg:w-[500px] lg:first:h-[350px] lg:h-[380px]',
});
