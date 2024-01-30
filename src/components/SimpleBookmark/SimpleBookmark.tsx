export interface ISimpleBM {
   title: string;
   text: string;
}
export function SimpleBookmark({ title, text }: ISimpleBM) {
   return (
      <section className="w-full py-20">
         <div className="w-[1200px] mx-auto">
            <div className="w-[540px]">
               <h1 className="text-5xl font-medium">{title}</h1>
               <p className="text-grayishBlue my-5">{text}</p>
               <div></div>
            </div>
         </div>
      </section>
   );
}
