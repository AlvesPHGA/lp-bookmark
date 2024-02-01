export interface IFeature {
   title: string;
   text: string;
}

export function Features({ title, text }: IFeature) {
   return (
      <section className="py-10">
         <div className="w-[1200px] mx-auto">
            <div className="text-center w-[50%] mx-auto">
               <h2 className="text-3xl font-medium">{title}</h2>
               <p className="py-6">{text}</p>
            </div>
         </div>
      </section>
   );
}
