export interface IFAQ {
   title: string;
   text: string;
}

export function FrequentlyAskedQuestions({ title, text }: IFAQ) {
   return (
      <section className="py-20">
         <div className="w-[1200px] mx-auto">
            <div className="w-[50%] text-center mx-auto mb-10">
               <h2>{title}</h2>
               <p className="mt-7">{text}</p>
            </div>
         </div>
      </section>
   );
}
