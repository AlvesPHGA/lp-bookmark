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
      tab: 'py-6 px-12 font-medium text-base text-slate-500 hover:text-red-500 transition',
      content_box: 'pr-20 flex flex-col justify-center gap-5',
   },
});
