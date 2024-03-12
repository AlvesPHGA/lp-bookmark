// import { Button } from '../../Button/Button';
import React from 'react';
import { Input } from '../../Form/Input/Input';

export interface IContact {
   sutitle: string;
   title: string;
}

export function Contact({ sutitle, title }: IContact) {
   const [email, setEmail] = React.useState('');
   const [error, setError] =
      React.useState<React.SetStateAction<string | null>>(null);

   function validField(element: string) {
      const emailRgx =
         /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

      if (!emailRgx.test(element)) {
         setError('Email invalido');
         return false;
      } else {
         setError(null);
         return true;
      }
   }

   function handleBlur({ target }) {
      validField(target.value);
   }

   function handleChange({ target }) {
      if (error) validField(target.value);
      setEmail(target.value);
   }

   function handleSubmit(ev) {
      ev.preventDefault();
      if (email.length > 3 && validField(email)) {
         alert('Dados enviados com sucesso');
         return true;
      } else {
         setError('Favor preencher corretamente o campo email');
         return false;
      }
      return true;
   }

   return (
      <section className="bg-[#5368DF] py-20">
         <div className="w-[1200px] mx-auto">
            <div className="text-center w-[40%] mx-auto">
               <p className="uppercase text-white text-xs tracking-[.4rem]">
                  {sutitle}
               </p>
               <h2 className="text-white mt-5">{title}</h2>
            </div>
            <form
               onSubmit={handleSubmit}
               className="w-[40%] mx-auto mt-10 flex justify-between"
            >
               <Input
                  value={email}
                  onChange={handleChange}
                  name="email"
                  isError={error}
                  onBlur={handleBlur}
               />
               <button className="__button btn__contact h-[50px]">
                  Contact Us
               </button>
            </form>
         </div>
      </section>
   );
}
