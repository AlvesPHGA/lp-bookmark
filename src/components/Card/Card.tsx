export interface ICard {
   image: string;
   title: string;
   version: number;
}

export function Card({ image, title, version }: ICard) {
   return (
      <div>
         <img src={image} alt="" />
         <div>
            <h3>{title}</h3>
            <span>Minimum version {version}</span>
         </div>
         <div>
            <button>Add & Install Extesion</button>
         </div>
      </div>
   );
}
