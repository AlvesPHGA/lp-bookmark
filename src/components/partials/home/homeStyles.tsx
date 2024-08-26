import { tv } from 'tailwind-variants';

export const title = tv({
   base: 'text-5xl text-blue-950 font-medium',

   variants: {
      size: {
         subtitle: 'text-3xl',
         subtitle_two: 'text-xl mt-5 mb-1',
      },

      color: {
         white: 'text-white',
      },
   },
});

export const text = tv({
   base: 'text-slate-400',

   variants: {
      size: {
         sm: 'text-sm',
      },
   },
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

export const featuresTab = tv({
   slots: {
      base: 'w-full mx-auto space-y-16 mt-16',
      tabs_box: 'flex mx-auto items-center w-fit border-b border-slate-300',
      tab: 'py-6 px-12 font-medium text-base text-slate-500 hover:text-red-500 transition',
      content_box: 'pr-20 flex flex-col justify-center gap-5',
   },
});

export const download = tv({
   slots: {
      content_box: 'space-y-6 w-2/5 mx-auto text-center',

      cards_box: 'w-full flex justify-center gap-10 mt-14 py-5 relative',
      card: 'pt-10 rounded-lg shadow-lg w-fit relative first:bottom-5 last:top-5',
      card_box_one: 'flex flex-col items-center',
   },
});

export const faq = tv({
   slots: {
      content_box: 'space-y-6 w-5/12 mx-auto text-center',
      faq_box: 'w-5/12 mx-auto flex flex-col items-center mt-14 gap-10',
      faq_field: 'py-5 border-t border-slate-400 last:border-b',
      question:
         'text-blue-950 font-medium flex items-center justify-between pr-5 cursor-pointer hover:text-red-500 transition',
   },
});
