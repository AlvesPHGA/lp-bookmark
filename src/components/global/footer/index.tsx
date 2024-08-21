import Image from 'next/image';
import { Container, Nav } from '../componentsGlobal';

export function Footer() {
   return (
      <footer>
         <Container>
            <div>
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
         </Container>
      </footer>
   );
}
