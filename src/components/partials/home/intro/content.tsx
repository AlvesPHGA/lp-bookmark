import Link from 'next/link';
import { intro } from '../homeStyles';

const { title, text_box } = intro();

export function ContentComponent() {
   return (
      <div className="w-5/12">
         <h1 className={title()}>A Simple Bookmark Manager</h1>
         <div className={text_box()}>
            <p className="text-slate-400">
               A clean and simple interface to organize your favourite websites.
               Open a new browser tab and see your sites load instantly. Try it
               for free.
            </p>

            <div className="flex gap-3">
               <Link
                  href="#"
                  className="block w-fit px-5 py-2 bg-blue-600 font-medium rounded-md text-slate-300 text-base drop-shadow-lg border border-blue-600 hover:bg-transparent hover:text-blue-600 transition"
               >
                  Get it on Chrome
               </Link>
               <Link
                  href="#"
                  className="block w-fit px-5 py-2 font-medium rounded-md text-base bg-slate-200 text-slate-400 drop-shadow-lg border border-slate-200 hover:bg-transparent hover:border-slate-400 transition"
               >
                  Get it on Firefox
               </Link>
            </div>
         </div>
      </div>
   );
}
