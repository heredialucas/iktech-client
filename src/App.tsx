import { ProductCart } from "./components/ProductCart/ProductCart";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import { Section } from "./components/Section/Section";
import { Constans } from "./constants/Constans";
import ListCard from "./components/ListCard/ListCard";
import { Footer } from "./components/Footer/Footer";

const {
  SECTION_TEXT: { TITLE, CONTENT },
  TEXT: { COMPLETA_TU_LOOK, PRODUCTOS_RECOMENDADOS },
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

function App() {
  return (
    <>
      <Navbar />
      <Home className="px-20">
        <ProductCart />
        <Section title={TITLE} content={CONTENT} />
        <Section title={TITLE} content={CONTENT} />
        <ListCard
          title={COMPLETA_TU_LOOK}
          cards={[
            obj,
            obj,
            obj,
            obj,
            obj,
            obj,
            obj,
            obj,
            obj,
            obj,
            obj,
            obj,
            obj,
          ]}
          btn={true}
        />
        <ListCard
          title={PRODUCTOS_RECOMENDADOS}
          cards={[
            obj,
            obj,
            obj,
            obj,
            obj,
            obj,
            obj,
            obj,
            obj,
            obj,
            obj,
            obj,
            obj,
          ]}
          classNameTitle="bg-white text-gray-500"
          underline
        />
      </Home>
      <Footer />
    </>
  );
}

export default App;
