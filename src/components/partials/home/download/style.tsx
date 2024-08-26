import { tv } from 'tailwind-variants';

export const download = tv({
   slots: {
      content_box: 'space-y-6 w-2/5 mx-auto text-center',

      cards_box: 'w-full flex justify-center gap-10 mt-14 py-5 relative',
      card: 'pt-10 rounded-lg shadow-lg w-fit relative first:bottom-5 last:top-5',
      card_box_one: 'flex flex-col items-center',
   },
});
