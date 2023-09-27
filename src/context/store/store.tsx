import { create } from "zustand";
import ProductCartInterface from "../../interfaces/ProductCart/ProductCartInterface";

interface useProductInterface {
  allProducts: ProductCartInterface[];
  cart: ProductCartInterface[];
  productSelected?: ProductCartInterface;
  setAllProducts?: (products: ProductCartInterface[]) => void;
  setCartProducts: (product: ProductCartInterface) => void;
  setProduct: (product: ProductCartInterface) => void;
}

export const useProduct = create<useProductInterface>((set) => ({
  allProducts: [],
  cart: [],
  productSelected: {
    nombre: "",
    precio: 0,
    foto: "",
    referencia: "",
    albumFotos: [],
  },
  setProduct: ({
    nombre,
    foto,
    referencia,
    precio,
    albumFotos,
  }: ProductCartInterface) =>
    set({
      productSelected: {
        nombre,
        foto,
        referencia,
        precio,
        albumFotos,
      },
    }),
  setCartProducts: (product: ProductCartInterface) =>
    set((state) => ({ cart: [...(state.cart ?? []), product] })),
  setAllProducts: (products: ProductCartInterface[]) =>
    set({
      allProducts: products,
    }),
}));
