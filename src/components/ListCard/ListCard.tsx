import CardInterface from "../../interfaces/Card/CardInterface";
import { SliderImg } from "../SliderImg/SliderImg";
import { Card } from "../Card/Card";

interface ListCardProps {
  cards: CardInterface[];
}

const ListCard = ({ cards }: ListCardProps) => {
  return (
    <div className="w-full my-5">
      <h3 className="bg-gray-200 text-2xl text-black font-medium py-1 px-2">
        COMPLETA TU LOOK
      </h3>
      <div className="my-10">
        <SliderImg className="w-full">
          {cards.map((card, index) => (
            <Card
              key={index}
              nombre={card.nombre}
              precio={card.precio}
              foto={card.foto}
              albumFotos={card.albumFotos}
            />
          ))}
        </SliderImg>
      </div>
    </div>
  );
};

export default ListCard;
