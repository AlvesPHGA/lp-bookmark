import Button from '@/components/form/button';
import { Container } from '../componentsGlobal';
import Nav from './nav';
import Image from 'next/image';

export default function Header() {
   return (
      <header className="py-5">
         <Container>
            <div className="h-7 w-40 relative">
               <Image
                  src="./logo-bookmark.svg"
                  alt="logo Bookmark"
                  fill
                  className="object-fill"
               />
            </div>
            <div className="flex gap-7 items-center">
               <Nav />
               <Button>Login</Button>
            </div>
         </Container>
      </header>
   );
}
