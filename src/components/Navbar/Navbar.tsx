import { Header } from "../Header/Header";
import { NavHeader } from "../NavHeader/NavHeader";
import { Navlink } from "../NavLink/Navlink";

export const Navbar = () => {
  return (
    <nav className="navbar border-b-2 border-grey-600 pb-2">
      <Header />
      <div className="px-20">
        <NavHeader />
        <Navlink />
      </div>
    </nav>
  );
};
