export interface IFeature {
   title: string;
   text: string;
}

export function Features({ title, text }: IFeature) {
   return (
      <section className="py-10">
         <div className="w-[1200px] mx-auto">
            <div className="text-center w-[50%] mx-auto pb-5">
               <h2 className="text-3xl font-medium">{title}</h2>
               <p className="pt-6">{text}</p>
            </div>
            <div className="pt-5 w-full border">
               <div className="w-fit mx-auto border-b border-b-grayishBlue">
                  <button className="text-lg border px-10 py-3">
                     Simple Bookmark
                  </button>
                  <button className="px-10 text-lg">Speedy Searching</button>
                  <button className="text-lg px-10">Easy Sharing</button>
               </div>
               <div className="mt-14 flex items-center justify-between">
                  <div className="w-[600px] h-[400px] bg-[url(./src/assets/illustration-features-tab-1.svg)] bg-cover bg-center rounded-lg"></div>
                  <div className="w-[500px]">
                     <h3 className="text-3xl font-medium">
                        Bookmark in one click
                     </h3>
                     <p className="my-8">
                        Organize your bookmarks however you like. Our simple
                        drag-and-drop interface gives you complete control over
                        how you manage your favorite sites.
                     </p>
                     <a
                        href=""
                        className="block w-fit px-5 py-2 text-base rounded bg-[#5368DF] text-white border-2 border-[#5368DF] hover:text-[#5368DF] hover:bg-transparent transition-all"
                     >
                        More info
                     </a>
                  </div>
               </div>
               <div></div>
               <div></div>
            </div>
         </div>
      </section>
   );
}
