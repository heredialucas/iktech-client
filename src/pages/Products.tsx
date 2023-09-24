import { Product } from "../types.d";

interface Props {
  products: Product[];
}

export const Products = ({ products }: Props) => {
  return (
    <>
      {products?.map((product) => (
        <p key={product.nombre}>{product.nombre}</p>
      ))}
    </>
  );
};
