export function Button({ legend }) {
   return (
      <button className="uppercase border-2 border-softRed font-medium text-white bg-softRed px-7 py-1 rounded tracking-[0.1em] hover:text-softRed hover:bg-white">
         {legend}
      </button>
   );
}
