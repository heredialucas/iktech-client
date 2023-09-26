import { create } from "zustand";
import ProductCartInterface from "../../interfaces/ProductCart/ProductCartInterface";

interface useProductInterface {
  allProducts: ProductCartInterface[];
  productSelected?: ProductCartInterface;
  cart: ProductCartInterface[];
  setAllProducts?: (products: ProductCartInterface[]) => void;
  setProduct: (product: ProductCartInterface) => void;
  setCartProducts: (product: ProductCartInterface) => void;
}

export const useProduct = create<useProductInterface>((set) => ({
  allProducts: [],
  productSelected: {
    nombre: "",
    precio: 0,
    foto: "",
    referencia: "",
    albumFotos: [],
  },
  cart: [],
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
