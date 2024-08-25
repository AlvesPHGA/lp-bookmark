import { Container } from '@/components/global/componentsGlobal';
import { text, title } from '../homeStyles';
import Image from 'next/image';
import Link from 'next/link';
import { container, cta } from '@/components/global/componentsGlobalStyle';
import { Content } from './content';

export function Download() {
   return (
      <section className="py-24">
         <Container flex_direction="column">
            <Content />

            <div className="w-full flex justify-center gap-10 mt-14 py-5 relative">
               <div className="pt-10 rounded-lg shadow-lg w-fit relative bottom-5 ">
                  <div className="flex flex-col items-center pb-5">
                     <Image
                        src="./logo-chrome.svg"
                        alt=""
                        width={100}
                        height={100}
                     />
                     <h3 className="text-xl text-blue-950 mt-5 mb-1 font-medium">
                        Add to Chrome
                     </h3>
                     <p className="text-sm text-slate-400">
                        Minimum version 62
                     </p>
                  </div>
                  <div className="p-6">
                     <Link href="#" className={cta({ type: 'blue' })}>
                        Add & Install Extension
                     </Link>
                  </div>
               </div>

               <div className="pt-10 rounded-lg shadow-lg w-fit relative">
                  <div className="flex flex-col items-center">
                     <Image
                        src="./logo-firefox.svg"
                        alt=""
                        width={100}
                        height={100}
                     />
                     <h3 className="text-xl text-blue-950 mt-5 mb-1 font-medium">
                        Add to Firefox
                     </h3>
                     <p className="text-sm text-slate-400">
                        Minimum version 55
                     </p>
                  </div>
                  <div className="p-6">
                     <Link href="#" className={cta({ type: 'blue' })}>
                        Add & Install Extension
                     </Link>
                  </div>
               </div>

               <div className="pt-10 rounded-lg shadow-lg w-fit relative  top-5">
                  <div className="flex flex-col items-center">
                     <Image
                        src="./logo-opera.svg"
                        alt=""
                        width={100}
                        height={100}
                     />
                     <h3 className="text-xl text-blue-950 mt-5 mb-1 font-medium">
                        Add to Opera
                     </h3>
                     <p className="text-sm text-slate-400">
                        Minimum version 62
                     </p>
                  </div>
                  <div className="p-6">
                     <Link href="#" className={cta({ type: 'blue' })}>
                        Add & Install Extension
                     </Link>
                  </div>
               </div>
            </div>
         </Container>
      </section>
   );
}
