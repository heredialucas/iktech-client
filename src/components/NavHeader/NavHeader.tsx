import img from "../../assets/hushpupies.png";
import { FaChevronRight } from "react-icons/fa";
import { Constans } from "../../constants/Constans";

const {
  HOT_SALES: {
    COMPRAS: { ENVIOS },
  },
} = Constans;

export const NavHeader = () => {
  return (
    <div className="container-fluid flex justify-between">
      <a href="#">
        <img src={img} alt="logo" className="object-contain h-32 pt-5" />
      </a>
      <div className="relative flex flex-col items-end py-3">
        <div className="flex items-center">
          <input
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-xs text-sm focus:outline-none"
            type="text"
            placeholder="BUSCAR"
            required
          />
          <FaChevronRight className="absolute right-2  text-xs border-gray-300 border-l-0 h-10" />
        </div>
        <div className="py-10 text-red-400 text-sm">{ENVIOS}</div>
      </div>
    </div>
  );
};
