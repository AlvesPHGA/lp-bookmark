export function BackBlue() {
   function position() {
      const element = document.querySelectorAll('.backBlue');

      element.forEach((item) => {
         item.parentElement?.classList.contains('__features')
            ? item.classList.add('backBlue_left')
            : item.classList.add('backBlue_right');
      });
   }
   return <div className={`backBlue ${position()}`}></div>;
}
