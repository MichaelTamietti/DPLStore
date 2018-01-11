import react from 'react';
import { setFlash } from './flash';
import { setHeaders } from './headers';
import axios from 'axios';

export const ADD_PRODUCT = 'ADD_PRODUCT';

export const addProduct = (product) => {
  return(dispatch) => {
   axios.post(`/api/products`, {product} )
    .then( ({ data, headers }) => {
      dispatch({ type: ADD_PRODUCT, product: data, headers });
    })
    .catch( err => {
      const message = err.response.data.errors;
      dispatch(setHeaders(err.headers));
      dispatch(setFlash(message, 'red'));
    })
  }
}
