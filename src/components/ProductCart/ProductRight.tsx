import { ButtonAdd } from "../../styles/Button/Button";
import { Button } from "../Button/Button";
import { AiFillHeart } from "react-icons/ai";
import { Constans } from "../../constants/Constans";

const {
  TEXT: { COD_DE_PRODUCTO, COLOR, TALLA, GUIA_DE_TALLAS },
} = Constans;

const obj = {
  nombre: "RUTAS PARA LA ZAPAS",
  foto: "https://i.ibb.co/4SnyQps/1.jpg",
  referencia: "123456789",
  precio: 1000,
  albumFotos: [
    "https://i.ibb.co/4SnyQps/1.jpg",
    "https://i.ibb.co/4SnyQps/1.jpg",
    "https://i.ibb.co/4SnyQps/1.jpg",
    "https://i.ibb.co/4SnyQps/1.jpg",
    "https://i.ibb.co/4SnyQps/1.jpg",
    "https://i.ibb.co/4SnyQps/1.jpg",
    "https://i.ibb.co/4SnyQps/1.jpg",
    "https://i.ibb.co/4SnyQps/1.jpg",
    "https://i.ibb.co/4SnyQps/1.jpg",
    "https://i.ibb.co/4SnyQps/1.jpg",
    "https://i.ibb.co/4SnyQps/1.jpg",
    "https://i.ibb.co/4SnyQps/1.jpg",
    "https://i.ibb.co/4SnyQps/1.jpg",
  ],
};

export const ProductRight = () => {
  return (
    <div className="flex flex-col pr-20">
      <h2 className="text-3xl pt-10 text-gray-500">{obj.nombre}</h2>
      <span className="text-2xl text-red-400">${obj.precio}</span>
      <span className="text-gray-400">
        {COD_DE_PRODUCTO}
        {obj.precio}
      </span>
      <h3 className="text-1xl text-gray-500 pt-10">{COLOR}</h3>
      <img
        className="h-24 object-contain self-start hover:border-2 hover:border-red-400 hover:shadow-lg"
        src="https://i.ibb.co/4SnyQps/1.jpg"
        alt="ZAPAS"
      />
      <h3 className="text-1xl text-gray-500 pt-10">{TALLA}</h3>
      <div>
        <div className="flex gap-5 p-2 text-black">
          <button className="bg-gray-200 w-16 h-16 ">5</button>
          <button className="bg-gray-200 w-16 h-16">5.5</button>
          <button className="bg-gray-200 w-16 h-16">6</button>
          <button className="bg-gray-200 w-16 h-16">6.5</button>
          <button className="bg-gray-200 w-16 h-16">7</button>
        </div>
        <div className="flex gap-5 p-2">
          <button className="bg-gray-200 w-16 h-16">7.7</button>
          <button className="bg-gray-200 w-16 h-16">8</button>
          <button className="bg-gray-200 w-16 h-16">8.5</button>
          <button className="bg-gray-200 w-16 h-16">9</button>
          <button className="bg-gray-200 w-16 h-16">9.5</button>
        </div>
      </div>
      <a
        href="#guiaDeTalles"
        className="text-1xl text-gray-500 pt-10 underline"
      >
        {GUIA_DE_TALLAS}
      </a>
      <div className="flex items-center justify-between">
        <Button className={ButtonAdd} textContent="AÑADIR AL CARRITO" />
        <AiFillHeart className="text-gray-300 h-12 w-12 mt-5" />
      </div>
    </div>
  );
};
