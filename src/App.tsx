import { ProductCart } from "./components/ProductCart/ProductCart";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import { Section } from "./components/Section/Section";
import { Constans } from "./constants/Constans";
import ListCard from "./components/ListCard/ListCard";
import { Footer } from "./components/Footer/Footer";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "./queries/queries";
import { Loading } from "./components/Loading/Loading";
import { useProduct } from "./context/store/store";

const {
  SECTION_TEXT: { TITLE, CONTENT },
  TEXT: { COMPLETA_TU_LOOK, PRODUCTOS_RECOMENDADOS },
} = Constans;

function App() {
  const { data, loading } = useQuery(GET_PRODUCTS);
  const setProduct = useProduct((state) => state.setProduct);
  const setAllProducts = useProduct((state) => state.setAllProducts);

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
              title={COMPLETA_TU_LOOK}
              cards={data.products}
              btn={true}
            />
            <ListCard
              title={PRODUCTOS_RECOMENDADOS}
              cards={data?.products}
              classNameTitle="bg-white text-gray-500"
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
