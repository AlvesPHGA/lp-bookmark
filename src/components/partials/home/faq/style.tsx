import { baseContainer } from '@/components/global/componentsGlobalStyle';
import { tv } from 'tailwind-variants';

export const faqStyle = tv({
   slots: {
      faq: 'py-24 lg:py-20 ms:py-16 ml:z-0',
      container: [baseContainer(), 'flex-col'],
      content_box:
         'space-y-6 w-5/12 mx-auto text-center md:space-y-4 md:w-3/5 ml:w-full',
      faq_box:
         'w-5/12 mx-auto flex flex-col items-center mt-14 gap-10 lg:w-4/6 md:w-3/4 ml:w-full',
      faq_field:
         'pt-5 pb-1 border-t border-slate-400 last:border-b relative md:pt-3 md:pb-0.5 ml:pb-1',
      question_faq:
         'text-blue-950 font-medium flex items-center justify-between pr-5 cursor-pointer hover:text-red-500 z-50 relative ml:px-2 ms:text-base ms:pb-1',
      arrow: 'size-10',
      answer_faq: 'mt-5 text-slate-400 ms:text-sm',
   },

   variants: {
      answer: {
         hidden: {
            arrow: 'text-blue-600',
            answer_faq: 'h-0 opacity-0',
         },
      },
      active: {
         true: {
            arrow: 'text-red-500 rotate-180',
            answer_faq: 'opacity-100 h-28',
         },
      },
   },
});
