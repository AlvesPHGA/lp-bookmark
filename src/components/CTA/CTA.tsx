export function CTA({ legend }: { legend: string }) {
   return (
      <a
         href=""
         className={`block border-2 w-fit py-3 px-6 rounded text-base font-medium hover:transition-all ${
            legend === 'Firefox'
               ? 'bg-[#F7F7F7] text-veryDarkBlue border-[#F7F7F7] hover:bg-transparent hover:border-veryDarkBlue'
               : 'bg-[#5368DF] text-white border-[#5368DF] hover:bg-transparent hover:text-[#5368DF]'
         }`}
      >
         Get it on {legend}
      </a>
   );
}
