export function TabButton({ legend }: { legend: string }) {
   return (
      <button className="text-grayishBlue text-lg px-10 py-3 cursor-pointer transition-all hover:text-softRed">
         {legend}
      </button>
   );
}
