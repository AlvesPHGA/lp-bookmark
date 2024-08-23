import { Download } from '@/components/partials/home/download';
import { Features } from '@/components/partials/home/features';
import { IntroHome } from '@/components/partials/home/intro';

export default function Home() {
   return (
      <main>
         <IntroHome />
         <Features />
         <Download />
      </main>
   );
}
