interface TabButtonProps {
   legend: string;
   onClick: React.MouseEventHandler;
   isActive: boolean;
}

export function TabButton({ legend, onClick, isActive }: TabButtonProps) {
   return (
      <button
         onClick={onClick}
         className={`text-grayishBlue text-lg px-10 py-3 cursor-pointer transition-all hover:text-softRed ${
            isActive ? 'active-tab' : ''
         }`}
      >
         {legend}
      </button>
   );
}
