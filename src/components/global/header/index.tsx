import Button from '@/components/form/button';
import { Container } from '../componentsGlobal';
import Nav from './nav';

export default function Header() {
   return (
      <header className="py-5">
         <Container>
            <div className="flex gap-7 items-center">
               <Nav />
               <Button>Login</Button>
            </div>
         </Container>
      </header>
   );
}
