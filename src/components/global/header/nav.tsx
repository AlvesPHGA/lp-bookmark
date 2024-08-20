import Link from 'next/link';

export default function Nav() {
   return (
      <nav className="space-x-5">
         <Link
            className="text-xl uppercase text-blue-950 hover:text-red-500 transition"
            href="#"
         >
            Features
         </Link>
         <Link
            className="text-xl uppercase text-blue-950 hover:text-red-500 transition"
            href="#"
         >
            Pricing
         </Link>
         <Link
            className="text-xl uppercase text-blue-950 hover:text-red-500 transition"
            href="#"
         >
            Contact
         </Link>
      </nav>
   );
}
