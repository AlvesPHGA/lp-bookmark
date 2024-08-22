import { tv } from 'tailwind-variants';

export const title = tv({
   base: 'text-5xl text-blue-950 font-medium',

   variants: {
      size: {
         subtitle: 'text-3xl',
      },
   },
});

export const text = tv({
   base: 'text-slate-400',
});

export const intro = tv({
   slots: {
      base: 'pb-44 pt-48 relative',
      title: 'text-5xl text-blue-950 font-medium',
      text_box: 'w-11/12 mt-8 space-y-6',
   },
});

export const features = tv({
   slots: {
      content: 'text-center space-y-5',
      text_box: 'w-5/12 text-center mx-auto',
   },
});
