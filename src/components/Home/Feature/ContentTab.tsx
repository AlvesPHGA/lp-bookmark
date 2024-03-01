interface ContentTabProps {
   title: string;
   text: string;
   isActive: boolean;
}

export function ContentTab({ title, text, isActive }: ContentTabProps) {
   return (
      <div
         className={`__default-tab __content-tab __active-tab ${
            isActive ? 'activeTabContent' : ''
         }`}
      >
         <div className="flex mt-14 items-center justify-between">
            <div className="w-[600px] h-[400px] bg-[url(./src/assets/illustration-features-tab-1.svg)] bg-cover bg-center rounded-lg"></div>
            <div className="w-[500px]">
               <h3 className="text-3xl font-medium">{title}</h3>
               <p className="my-8">{text}</p>
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
