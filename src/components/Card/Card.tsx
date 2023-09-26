import { useProduct } from "../../context/store/store";
import CardInterface from "../../interfaces/Card/CardInterface";
import { ButtonAdd } from "../../styles/Button/Button";
import { SliderStyle } from "../../styles/SliderCard/SliderCard";
import { SliderImg } from "../SliderImg/SliderImg";

export const Card = ({
  nombre,
  precio,
  foto,
  albumFotos,
  btn,
}: CardInterface) => {
  const allProducts = useProduct((state) => state.allProducts);
  const setProduct = useProduct((state) => state.setProduct);
  const setCartProducts = useProduct((state) => state.setCartProducts);

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
          className={`btn rounded ${ButtonAdd}`}
        >
          Agregar al carrito
        </button>
      )}
    </div>
  );
};
