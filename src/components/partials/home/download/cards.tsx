import { cta } from '@/components/global/componentsGlobalStyle';
import Image from 'next/image';
import Link from 'next/link';
import { download, text, title } from '../homeStyles';

const { cards_box, card, card_box_one } = download();

const infoCard = [
   {
      browser: 'chrome',
      legend: 'Chrome',
      version: '62',
   },
   {
      browser: 'firefox',
      legend: 'Firefox',
      version: '55',
   },
   {
      browser: 'opera',
      legend: 'Opera',
      version: '62',
   },
];

export function Cards() {
   return (
      <div className={cards_box()}>
         {infoCard.map((data) => {
            return (
               <div key={data.browser} className={card()}>
                  <div className={card_box_one()}>
                     <Image
                        src={`./logo-${data.browser}.svg`}
                        alt=""
                        width={100}
                        height={100}
                     />
                     <h3 className={title({ size: 'subtitle_two' })}>
                        Add to {data.legend}
                     </h3>
                     <p className={text({ size: 'sm' })}>
                        Minimum version {data.version}
                     </p>
                  </div>
                  <div className="p-6">
                     <Link href="#" className={cta({ type: 'blue' })}>
                        Add & Install Extension
                     </Link>
                  </div>
               </div>
            );
         })}
      </div>
   );
}
