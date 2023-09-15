import { gql } from "@apollo/client";

export const CREATE_PRODUCT = gql`
  mutation AddProduct($name: String!, $price: String!) {
    addProduct(name: $name, price: $price) {
      name
      price
    }
  }
`;

// Varibales

// {
//   "name": "Headphones",
//   "price": "2500"
// }