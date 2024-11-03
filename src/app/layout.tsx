import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/global/header';
import { Footer } from '@/components/global/footer';

export const metadata: Metadata = {
   title: 'Bookmark',
   description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, laboriosam.',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="pt-BR">
         <body>
            <section>
               <Header />
               {children}
               <Footer />
            </section>
         </body>
      </html>
   );
}
