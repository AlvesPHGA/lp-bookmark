import { baseContainer } from '@/components/global/componentsGlobalStyle';
import { tv } from 'tailwind-variants';

export const downloadStyle = tv({
   slots: {
      download: 'py-24 lg:py-20 md:py-12 ms:py-10 ml:z-0',
      container: [baseContainer(), 'flex-col'],
      content_box:
         'space-y-6 w-2/5 mx-auto text-center md:space-y-4 md:w-3/5 ml:w-full ml:z-0',

      cards_box:
         'w-full flex justify-center gap-10 mt-14 py-5 relative md:gap-0 md:justify-around ml:flex-col ml:items-center ml:z-0',
      card: 'pt-10 rounded-lg shadow-lg w-fit relative first:bottom-5 last:top-5 md:w-56 md:flex md:flex-col md:items-center ml:z-0',
      card_box_one: 'flex flex-col items-center ml:z-0',
   },
});
