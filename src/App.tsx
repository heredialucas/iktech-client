import { Constans } from "./constants/Constans";
import { Footer } from "./components/Footer/Footer";
import { GET_PRODUCTS } from "./queries/queries";
import { Home } from "./pages/Home/Home";
import { Loading } from "./components/Loading/Loading";
import { Navbar } from "./components/Navbar/Navbar";
import { ProductCart } from "./components/ProductCart/ProductCart";
import { Section } from "./components/Section/Section";
import { useProduct } from "./context/store/store";
import { useQuery } from "@apollo/client";
import ListCard from "./components/ListCard/ListCard";

const {
  SECTION_TEXT: { TITLE, CONTENT },
  TEXT: { COMPLETA_TU_LOOK, PRODUCTOS_RECOMENDADOS },
} = Constans;

function App() {
  const { data, loading } = useQuery(GET_PRODUCTS);
  const setAllProducts = useProduct((state) => state.setAllProducts);
  const setProduct = useProduct((state) => state.setProduct);

  if (data?.products && setAllProducts) {
    setProduct(data.products[0]);
    setAllProducts(data.products);
  }

  return (
    <>
      <Navbar />
      <Home className="px-20">
        {data?.products ? <ProductCart /> : <Loading />}
        <Section title={TITLE} content={CONTENT} />
        <Section title={TITLE} content={CONTENT} />
        {loading && !data?.products && <Loading />}
        {data?.products && (
          <>
            <ListCard
              btn={true}
              cards={data.products}
              title={COMPLETA_TU_LOOK}
            />
            <ListCard
              cards={data?.products}
              classNameTitle="bg-white text-gray-500"
              title={PRODUCTOS_RECOMENDADOS}
              underline
            />
          </>
        )}
      </Home>
      <Footer />
    </>
  );
}

export default App;
