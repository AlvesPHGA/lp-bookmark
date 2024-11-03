import { Contact } from '@/components/partials/home/contact';
import { Download } from '@/components/partials/home/download';
import { FAQ } from '@/components/partials/home/faq';
import { Features } from '@/components/partials/home/features';
import { IntroHome } from '@/components/partials/home/intro';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'Bookmark',
   description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, laboriosam.',
};

export default function Home() {
   return (
      <main>
         <IntroHome />
         <Features />
         <Download />
         <FAQ />
         <Contact />
      </main>
   );
}
