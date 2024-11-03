import { Contact } from '@/components/partials/home/contact';
import { Download } from '@/components/partials/home/download';
import { FAQ } from '@/components/partials/home/faq';
import { Features } from '@/components/partials/home/features';
import { IntroHome } from '@/components/partials/home/intro';

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
