import { tv } from 'tailwind-variants';

export const faq = tv({
   slots: {
      content_box: 'space-y-6 w-5/12 mx-auto text-center',
      faq_box: 'w-5/12 mx-auto flex flex-col items-center mt-14 gap-10',
      faq_field: 'py-5 border-t border-slate-400 last:border-b',
      question_faq:
         'text-blue-950 font-medium flex items-center justify-between pr-5 cursor-pointer hover:text-red-500 transition',
      arrow: 'size-10',
      answer_faq: 'mt-5 text-slate-400',
   },

   variants: {
      answer: {
         hidden: {
            arrow: 'text-blue-600',
            answer_faq: 'hidden',
         },
      },
      active: {
         true: {
            arrow: 'text-red-500 rotate-180',
            answer_faq: 'block',
         },
      },
   },
});
