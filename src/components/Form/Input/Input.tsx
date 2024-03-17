import { ReactSVG } from 'react-svg';
import iconError from '../../../assets/icon-error.svg';

interface InputProps {
   value: string;
   onChange: React.ChangeEvent<HTMLInputElement>;
   name: string;
   isError: boolean;
   onBlur: React.FocusEvent<HTMLInputElement>;
}

export function Input({ value, onChange, name, isError, onBlur }: InputProps) {
   return (
      <div
         className={`relative w-[68%]  border-2 border-[#5368DF] rounded-md ${
            isError ? 'bg-softRed border-softRed' : ''
         }`}
      >
         <div className={`relative w-full h-10 bg-white rounded-md`}>
            {isError && (
               <ReactSVG
                  className="absolute size-1 right-5 -translate-y-[50%] bottom-[55%]"
                  src={iconError}
               />
            )}
            <input
               className={`w-[90%] h-full py-[11px] focus:border-none focus:shadow-none focus:outline-none px-2 rounded-md text-base bg-white`}
               type="text"
               name={name}
               id={name}
               placeholder="Enter your email address"
               value={value}
               onChange={onChange}
               onBlur={onBlur}
            />
         </div>
         {isError && (
            <span className="block text-sm px-2 pt-1 w-full text-white italic">
               {isError}
            </span>
         )}
      </div>
   );
}
