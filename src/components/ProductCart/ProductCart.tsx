import { ProductLeft } from "./ProductLeft";
import { ProductRight } from "./ProductRight";

export const ProductCart = () => {
  return (
    <div className="flex justify-between">
      <ProductLeft />
      <ProductRight />
    </div>
  );
};
