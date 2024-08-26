import { Tab } from './tab';
import { ContentTab } from './contentTab';
import { featuresTab } from '../style';

const { base, tabs_box } = featuresTab();

export function Feature() {
   return (
      <div className={base()}>
         <div className={tabs_box()}>
            <Tab>Simple Bookmarking</Tab>
            <Tab>Speedy Searching</Tab>
            <Tab>Easy Sharing</Tab>
         </div>
         <ContentTab />
      </div>
   );
}
