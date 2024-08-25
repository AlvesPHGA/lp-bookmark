import { ChevronDown } from 'lucide-react';

export function FAQContent() {
   return (
      <dl className="w-full">
         <div className="py-5 border-t border-slate-400">
            <dt className="text-blue-950 font-medium flex items-center justify-between pr-5">
               What is Bookmark?
               <ChevronDown className="text-blue-600 size-10" />
            </dt>
            <dd></dd>
         </div>
         <div className="py-5 border-t border-slate-400">
            <dt className="text-blue-950 font-medium flex items-center justify-between pr-5">
               How can I request a new browser?
               <ChevronDown className="text-blue-600 size-10" />
            </dt>
            <dd></dd>
         </div>
         <div className="py-5 border-t border-slate-400">
            <dt className="text-blue-950 font-medium flex items-center justify-between pr-5">
               Is there a mobile app?
               <ChevronDown className="text-blue-600 size-10" />
            </dt>
            <dd></dd>
         </div>
         <div className="py-5 border-t border-slate-400">
            <dt className="text-blue-950 font-medium flex items-center justify-between pr-5">
               What about other Chromium browsers?
               <ChevronDown className="text-blue-600 size-10" />
            </dt>
            <dd></dd>
         </div>
      </dl>
   );
}
