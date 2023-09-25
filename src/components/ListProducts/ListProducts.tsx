import { ListProduct } from "../../types.d";

interface Props {
  products: ListProduct[];
}

export const ListProducts = ({ products }: Props) => {
  return (
    <>
      {products?.map((product) => (
        <img src={product.foto} alt={product.nombre} key={product.nombre} />
      ))}
    </>
  );
};
