import { useQuery } from "@apollo/client";
import { Products } from "./pages/Products";
import { Product } from "./types.d";
import { GET_PRODUCTS } from "./queries/queries";
import "./App.css";

function App() {
  const { data, loading } = useQuery<{ products: Product[] }>(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;

  return data?.products && <Products products={data?.products} />;
}

export default App;
