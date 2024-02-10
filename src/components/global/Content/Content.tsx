import { IDefault } from '../../../pages/Home';

export function Content({ title, text }: IDefault) {
   return (
      <div className="w-[55%] mx-auto text-center">
         <h2>{title}</h2>
         <p className="py-10">{text}</p>
      </div>
   );
}
