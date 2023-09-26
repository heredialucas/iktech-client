import CardInterface from "../../interfaces/Card/CardInterface";
import { SliderStyle } from "../../styles/SliderCard/SliderCard";
import { SliderImg } from "../SliderImg/SliderImg";

export const Card = ({ nombre, precio, foto, albumFotos }: CardInterface) => {
  return (
    <div className="flex flex-col justify-center items-center w-80 h-80 bg-white shadow-lg rounded-xl overflow-hidden">
      <img className=" object-contain h-40" src={foto} alt="card" />
      <SliderImg className={SliderStyle}>
        {albumFotos.map((img, index) => (
          <div key={index}>
            <img src={img} alt="card" />
          </div>
        ))}
      </SliderImg>
      <div className="px-6 py-2">
        <div className="text-base mb-2">{nombre}</div>
        <p className="text-gray-500 text-center">{precio}</p>
      </div>
    </div>
  );
};
