import NavlinkInterface from "../../interfaces/Navlink/NavlinkInterface";
import { FaLock } from "react-icons/fa";
import { Link } from "../Link/Link";
import { useProduct } from "../../context/store/store";

export const Navlink = ({ className }: NavlinkInterface) => {
  const cartProducts = useProduct((state) => state.cart?.length);
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
          {cartProducts}
        </Link>
      </div>
    </div>
  );
};
