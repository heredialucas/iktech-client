import { Card } from "../Card/Card";
import { SliderImg } from "../SliderImg/SliderImg";
import ListCardInterface from "../../interfaces/ListCard/ListCardInterface";

const ListCard = ({
  btn,
  cards,
  className,
  classNameTitle,
  title,
  underline,
}: ListCardInterface) => {
  return (
    <div className={`w-full my-5 ${className}`}>
      <h3
        className={`bg-gray-200 text-2xl text-black font-medium py-1 px-2 ${classNameTitle}`}
      >
        {title}
      </h3>
      {underline && <hr className="my-2" />}
      <div className="my-10">
        <SliderImg className="w-full">
          {cards.map((card, index) => (
            <Card
              albumFotos={card.albumFotos}
              btn={btn}
              foto={card.foto}
              key={index}
              nombre={card.nombre}
              precio={card.precio}
            />
          ))}
        </SliderImg>
      </div>
    </div>
  );
};

export default ListCard;
