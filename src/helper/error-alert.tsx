export default function ErrorAlert({ alert }: { alert: boolean }) {
   if (alert) return null;
   return (
      <span className="py-0.5 px-3 text-base text-white font-medium rounded-[50%] text-wrap bg-red-500 mr-1">
         !
      </span>
   );
}
