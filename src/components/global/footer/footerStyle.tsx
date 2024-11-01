import { tv } from 'tailwind-variants';
import { baseContainer } from '../componentsGlobalStyle';

export const footerStyle = tv({
   slots: {
      footer: 'bg-blue-950 py-5 ml:py-8',
      container: [baseContainer(), 'items-center ml:flex-col'],
      logo_nav_box: 'flex items-center gap-14 md:gap-16 ml:flex-col ml:gap-10',
      logo: 'h-7 w-40 relative',
      social_media_box: 'flex gap-5 items-center ml:mt-10',
      social_media: 'size-11 text-white hover:text-red-500 transition',
   },
});
