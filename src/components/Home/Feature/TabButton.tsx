interface TabButtonProps {
   legend: string;
   onClick: React.MouseEventHandler;
   isActive: boolean;
}

export function TabButton({ legend, onClick, isActive }: TabButtonProps) {
   return (
      <button
         onClick={onClick}
         className={`relative text-grayishBlue text-lg px-10 py-3 cursor-pointer transition-all hover:text-softRed ${
            isActive
               ? 'text-veryDarkBlue after:absolute after:border-b-4 after:w-[100%] after:border-red-500 after:left-0 after:bottom-0'
               : ''
         }`}
      >
         {legend}
      </button>
   );
}
