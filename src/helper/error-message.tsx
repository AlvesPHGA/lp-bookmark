export function ErrorMessage({ error }: { error: string }) {
   if (error === '') return null;
   return (
      <div className="w-full bg-red-500 border border-red-500  rounded-b-md">
         <span className="text-sm text-white font-medium italic pl-1">
            {error}
         </span>
      </div>
   );
}
