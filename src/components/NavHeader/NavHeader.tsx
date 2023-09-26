import img from "../../assets/hushpupies.png";
import { Constans } from "../../constants/Constans";
import { Input } from "../Input/Input";

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
        <Input />
        <div className="py-10 text-red-400 text-sm">{ENVIOS}</div>
      </div>
    </div>
  );
};
