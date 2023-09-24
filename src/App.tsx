import { useQuery } from "@apollo/client";
import { Products } from "./components/Products/Products";
import { Product } from "./types.d";
import { GET_PRODUCTS } from "./queries/queries";
import { Loading } from "./components/Loading/Loading";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";

function App() {
  const { data, loading } = useQuery<{ products: Product[] }>(GET_PRODUCTS);

  if (loading) return <Loading />;

  return (
    <>
      <Header />
      <Home />
      {data?.products && <Products products={data.products} />}
    </>
  );
}

export default App;
