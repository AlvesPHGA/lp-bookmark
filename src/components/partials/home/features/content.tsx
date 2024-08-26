import { text, title } from '../homeStyles';
import { features } from './style';

const { content, text_box } = features();

export function ContentFeatures() {
   return (
      <div className={content()}>
         <h2 className={title({ size: 'subtitle' })}>Features</h2>
         <div className={text_box()}>
            <p className={text()}>
               Our aim is to make it quick and easy for you to access your
               favourite websites. Your bookmarks sync between your devices so
               you can access them on the go.
            </p>
         </div>
      </div>
   );
}
