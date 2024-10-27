import { tv } from 'tailwind-variants';

export const downloadStyle = tv({
   slots: {
      download: 'py-24 lg:py-20 md:py-12',
      container:
         'max-w-7xl flex justify-between mx-auto relative z-10 lg:max-w-4xl md:w-full md:px-6 ml:px-4 flex-col',
      content_box:
         'space-y-6 w-2/5 mx-auto text-center md:space-y-4 md:w-3/5 ml:w-full',

      cards_box:
         'w-full flex justify-center gap-10 mt-14 py-5 relative md:gap-0 md:justify-around ml:flex-col ml:items-center',
      card: 'pt-10 rounded-lg shadow-lg w-fit relative first:bottom-5 last:top-5 md:w-56 md:flex md:flex-col md:items-center',
      card_box_one: 'flex flex-col items-center',
   },
});
