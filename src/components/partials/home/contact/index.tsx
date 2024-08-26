import { Container } from '@/components/global/componentsGlobal';
import { title } from '../homeStyles';
import Button from '@/components/form/button';
import { contact } from './style';

const {
   section,
   texts_box,
   legend,
   form,
   input_box,
   input_field,
   input,
   alert,
} = contact();

export function Contact() {
   return (
      <section className={section()}>
         <Container flex_direction="column">
            <div className={texts_box()}>
               <p className={legend()}>35,000+ already joined</p>
               <h2 className={title({ size: 'subtitle', color: 'white' })}>
                  Stay up-to-date with what we&apos;re doing
               </h2>
            </div>
            <form className={form()}>
               <div className={input_box()}>
                  <div className={input_field()}>
                     <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Enter your email address"
                        className={input()}
                     />

                     <span className={alert()}>!</span>
                  </div>
                  {/* <div className="w-full bg-red-500 border border-red-500  rounded-b-md">
                     <span className="text-sm text-white font-medium italic pl-1">
                        whoops, make sure it&apos;s an email.
                     </span>
                  </div> */}
               </div>
               <Button place="contact">Contact Us</Button>
            </form>
         </Container>
      </section>
   );
}
