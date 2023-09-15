import {
  fetchProductStart,
  fetchProductSuccess,
  fetchProductFailure,
} from "../features/productSlice";
import { GET_PRODUCTS } from "../graphql/queries/productQuery";
import { client } from "../utils/config";

export const fetchProductData = (payload) => async (dispatch) => {
  dispatch(fetchProductStart());
  try {
    const response = await client.query({
      query: GET_PRODUCTS,
      variables: payload
    });
    dispatch(fetchProductSuccess(response.data));
  } catch (error) {
    dispatch(fetchProductFailure(error.message));
  }
};
