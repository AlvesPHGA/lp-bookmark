import { Container } from '../componentsGlobal';
import Nav from './nav';

export default function Header() {
   return (
      <header className="py-5">
         <Container>
            <div>
               <Nav />
               <button></button>
            </div>
         </Container>
      </header>
   );
}
