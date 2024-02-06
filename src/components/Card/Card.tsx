export interface ICard {
   image: string;
   title: string;
   version: number;
}

export function Card({ image, title, version }: ICard) {
   return (
      <div className="relative p-5 pt-10 rounded-xl shadow-lg">
         <img className="mx-auto" src={image} alt="" />
         <div className="text-center mt-5 mb-12">
            <h3 className="text-xl font-medium mb-1">{title}</h3>
            <span className="text-sm text-grayishBlue">
               Minimum version {version}
            </span>
         </div>
         <div>
            <button className="border-2 border-[#5368DF] px-6 py-2 rounded text-base bg-[#5368DF] text-white hover:bg-transparent hover:text-[#5368DF] transition-all">
               Add & Install Extesion
            </button>
         </div>
         <div className="absolute w-full h-1 bottom-[5rem] bg-[url('./src/assets/bg-dots.svg')] left-0"></div>
      </div>
   );
}
