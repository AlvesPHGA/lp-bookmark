export function Button({ legend }) {
   const element = document.querySelectorAll('.__button');
   element.forEach((item) => {
      item.innerHTML === 'Login'
         ? item.classList.add('__loginBtn')
         : item.classList.add('__contactBtn');
   });
   return <button className="__button">{legend}</button>;
}
