import { tv } from 'tailwind-variants';

export const footerStyle = tv({
   slots: {
      footer: 'bg-blue-950 py-5',
      logo_nav_box: 'flex items-center gap-14',
      logo: 'h-7 w-40 relative',
      social_media_box: 'flex gap-5 items-center',
      social_media: 'size-11 text-white hover:text-red-500 transition',
   },
});
