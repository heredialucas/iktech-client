import NavlinkInterface from "../../interfaces/Navlink/NavlinkInterface";
import { FaLock } from "react-icons/fa";
import { Link } from "../Link/Link";

export const Navlink = ({ className }: NavlinkInterface) => {
  return (
    <div className={`flex justify-between ${className}`}>
      <div className={`flex gap-7 ${className}`}>
        <Link href="#hombre" textContent="HOMBRE" />
        <Link href="#mujer" textContent="MUJER" />
        <Link href="#blog" textContent="BLOG" />
        <Link href="#historia" textContent="HISTORIA" />
        <Link href="#tiendas" textContent="TIENDAS" />
      </div>
      <div className="flex gap-1 items-center">
        <FaLock />
        <Link
          childrenClassName="text-black px-2"
          href="#cart"
          textContent="CARRITO"
        >
          0
        </Link>
      </div>
    </div>
  );
};
