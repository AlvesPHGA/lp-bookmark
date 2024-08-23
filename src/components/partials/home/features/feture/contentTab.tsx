import Image from 'next/image';
import { text, title } from '../../homeStyles';
import Link from 'next/link';
import { cta } from '@/components/global/componentsGlobalStyle';
import { Content } from './content';

export function ContentTab() {
   return (
      <div>
         <div className="grid justify-center gap-20 grid-cols-[600px_500px]">
            <Image
               src="./illustration-features-tab-1.svg"
               alt=""
               width={600}
               height={100}
            />
            <Content />
         </div>
      </div>
   );
}
