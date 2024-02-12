import { Button } from '../../Button/Button';
import { Input } from '../../Form/Input/Input';

export interface IContact {
   sutitle: string;
   title: string;
}

export function Contact({ sutitle, title }: IContact) {
   return (
      <section className="bg-[#5368DF] py-20">
         <div className="w-[1200px] mx-auto">
            <div className="text-center w-[40%] mx-auto">
               <p className="uppercase text-white text-xs tracking-[.4rem]">
                  {sutitle}
               </p>
               <h2 className="text-white mt-5">{title}</h2>
            </div>
            <form className="w-[40%] mx-auto mt-10 flex justify-between">
               <Input />
               <Button legend="Contact Us" />
            </form>
         </div>
      </section>
   );
}
