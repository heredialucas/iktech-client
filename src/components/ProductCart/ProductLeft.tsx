import { SliderImg } from "../SliderImg/SliderImg";

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

export const ProductLeft = () => {
  return (
    <div className="flex flex-col w-1/2">
      <p className="text-gray-500 text-lg p-2">{`HUSSPUPPIESCO / CALZADO / ${obj.nombre}`}</p>
      <img src="https://i.ibb.co/4SnyQps/1.jpg" alt="ZAPAS" />
      <hr className="w-9/12 p-3 self-center" />
      <SliderImg>
        {obj.albumFotos.map((foto) => (
          <div>
            <img src={foto} alt="ZAPAS" />
          </div>
        ))}
      </SliderImg>
    </div>
  );
};
