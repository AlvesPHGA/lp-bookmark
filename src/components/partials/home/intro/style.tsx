import { tv } from 'tailwind-variants';

export const intro = tv({
   slots: {
      base: 'pb-44 pt-48 relative',
      title: 'text-5xl text-blue-950 font-medium',
      text_box: 'w-11/12 mt-8 space-y-6',
   },
});
