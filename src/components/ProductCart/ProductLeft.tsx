import { useProduct } from "../../context/store/store";
import { SliderStyle } from "../../styles/SliderCard/SliderCard";
import { SliderImg } from "../SliderImg/SliderImg";

export const ProductLeft = () => {
  const productSelected = useProduct((state) => state.productSelected);
  
  return (
    <div className="flex flex-col w-1/2">
      <p className="text-gray-500 text-lg p-2">{`HUSSPUPPIESCO / CALZADO / ${productSelected?.nombre.toLocaleUpperCase()}`}</p>
      <img src={productSelected?.foto} alt="ZAPAS" />
      <hr className="w-9/12 p-3 self-center" />
      <SliderImg className={SliderStyle} quantity={6}>
        {productSelected?.albumFotos.map((foto, index) => (
          <div key={index}>
            <img src={foto} alt="ZAPAS" />
          </div>
        ))}
      </SliderImg>
    </div>
  );
};
