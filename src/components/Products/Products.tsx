import { Product } from "../../types.d";

interface Props {
  products: Product[];
}

export const Products = ({ products }: Props) => {
  return (
    <>
      {products?.map((product) => (
        <img src={product.foto} alt={product.nombre} key={product.nombre} />
      ))}
    </>
  );
};
