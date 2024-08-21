import Image from 'next/image';
import { Container, Nav } from '../componentsGlobal';
import { Facebook, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
   return (
      <footer className="bg-blue-950 py-5">
         <Container>
            <div className="flex items-center gap-14">
               <div className="h-7 w-40 relative">
                  <Image
                     src="./logo-bookmark-footer.svg"
                     alt="logo Bookmark"
                     fill
                     className="object-fill"
                  />
               </div>

               <Nav links="footer" />
            </div>

            <div className="flex gap-5 items-center">
               <Link href="#">
                  <Facebook className="size-11 text-white hover:text-red-500 transition" />
               </Link>

               <Link href="#">
                  <Twitter className="size-11 text-white hover:text-red-500 transition" />
               </Link>
            </div>
         </Container>
      </footer>
   );
}
