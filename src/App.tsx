import { ProductCart } from "./components/ProductCart/ProductCart";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import { Section } from "./components/Section/Section";
import { Constans } from "./constants/Constans";
import ListCard from "./components/ListCard/ListCard";

const {
  SECTION_TEXT: { TITLE, CONTENT },
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
        />
      </Home>
    </>
  );
}

export default App;
