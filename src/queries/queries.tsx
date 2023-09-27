import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query Products {
    products {
      albumFotos
      foto
      nombre
      precio
      referencia
    }
  }
`;
