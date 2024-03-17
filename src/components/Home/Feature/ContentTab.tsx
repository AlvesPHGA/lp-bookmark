import { CTA } from '../../UI/CTA/CTA';

interface ContentTabProps {
   title: string;
   text: string;
   image: string;
   isActive: boolean;
}

export function ContentTab({ title, text, image, isActive }: ContentTabProps) {
   return (
      <div className={` ${isActive ? 'block' : 'hidden'}`}>
         <div className="flex mt-14 items-center justify-between">
            <div className={`w-[600px] h-[400px] rounded-lg`}>
               <img src={image} alt={title} className="w-full" />
            </div>
            <div className="w-[500px]">
               <h3 className="text-3xl font-medium">{title}</h3>
               <p className="my-8">{text}</p>
               <CTA className="block w-fit px-5 py-2 text-base rounded bg-[#5368DF] text-white border-2 border-[#5368DF] hover:text-[#5368DF] hover:bg-transparent transition-all">
                  More info
               </CTA>
            </div>
         </div>
      </div>
   );
}
