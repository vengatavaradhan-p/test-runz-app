import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query Query($productId: ID!) {
    product(id: $productId) {
      name
      price
    }
  }
`;

// Varibales

// {
//   "productId": 1,
// }