import { ButtonAdd } from "../../styles/Button/Button";
import { SliderImg } from "../SliderImg/SliderImg";
import { SliderStyle } from "../../styles/SliderCard/SliderCard";
import { useProduct } from "../../context/store/store";
import CardInterface from "../../interfaces/Card/CardInterface";

export const Card = ({
  albumFotos,
  btn,
  foto,
  nombre,
  precio,
}: CardInterface) => {
  const allProducts = useProduct((state) => state.allProducts);
  const setCartProducts = useProduct((state) => state.setCartProducts);
  const setProduct = useProduct((state) => state.setProduct);

  return (
    <div className="flex flex-col justify-center items-center w-100 h-100 bg-white shadow-lg rounded overflow-hidden">
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
        <p className="text-xl text-red-400 text-center">${precio}</p>
      </div>
      {btn && (
        <button
          className={`btn rounded ${ButtonAdd}`}
          onClick={() => {
            allProducts &&
              setProduct(
                allProducts.filter((product) => product.foto === foto)[0]
              );
            setCartProducts(
              allProducts.filter((product) => product.foto === foto)[0]
            );
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          Agregar al carrito
        </button>
      )}
    </div>
  );
};
