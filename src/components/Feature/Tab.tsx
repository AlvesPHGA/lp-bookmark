const titleTab = ['Simple Bookmark', 'Speedy Searching', 'Easy Sharing'];

export interface ITab {
   title: string;
   text: string;
}

export function Tab({ title, text }: ITab) {
   return (
      <div className="pt-5 w-full border">
         <div className="w-fit mx-auto border-b border-b-grayishBlue">
            {titleTab.map((title, index) => (
               <button key={index} className="text-lg px-10 py-3">
                  {title}
               </button>
            ))}
         </div>
         <div className="mt-14 flex items-center justify-between">
            <div className="w-[600px] h-[400px] bg-[url(./src/assets/illustration-features-tab-1.svg)] bg-cover bg-center rounded-lg"></div>
            <div className="w-[500px]">
               <h3 className="text-3xl font-medium">Bookmark in one click</h3>
               <p className="my-8">
                  Organize your bookmarks however you like. Our simple
                  drag-and-drop interface gives you complete control over how
                  you manage your favorite sites.
               </p>
               <a
                  href=""
                  className="block w-fit px-5 py-2 text-base rounded bg-[#5368DF] text-white border-2 border-[#5368DF] hover:text-[#5368DF] hover:bg-transparent transition-all"
               >
                  More info
               </a>
            </div>
         </div>
      </div>
   );
}
