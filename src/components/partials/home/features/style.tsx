import { tv } from 'tailwind-variants';

export const features = tv({
   slots: {
      content: 'text-center space-y-5',
      text_box: 'w-5/12 text-center mx-auto',
   },
});

export const featuresTab = tv({
   slots: {
      base: 'w-full mx-auto space-y-16 mt-16',
      tabs_box: 'flex mx-auto items-center w-fit border-b border-slate-300',
      content_box: 'pr-20 flex flex-col justify-center gap-5',
   },
});

export const tab = tv({
   base: 'py-6 px-12 font-medium text-base text-slate-500 hover:text-red-500 transition',

   variants: {
      isActive: {
         true: 'text-blue-950',
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
         content: 'justify-center gap-20 grid-cols-[600px_500px]',
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
   base: 'w-[600px] h-[500px] first:h-[400px]',
});
