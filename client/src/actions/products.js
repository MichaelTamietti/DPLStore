import react from 'react';
import { setFlash } from './flash';
import { setHeaders } from './headers';
import axios from 'axios';

export const GET_PRODUCT = 'GET_PRODUCT';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';

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

export const getProducts = (cb) => {
  return(dispatch) => {
    axios.get('/api/products')
      .then ( ({ data, headers }) => {
        dispatch({ type: GET_PRODUCT, products: data, headers });
        cb();
      })
      .catch( err => {
        const message = err.response.data.errors;
        dispatch(setHeaders(err.headers));
        dispatch(setFlash(message, 'red'));
      })
  }
}

export const deleteProduct = (id) => {
  return(dispatch) => {
   axios.delete(`/api/products/${id}`)
    .then( res => {
      const { headers } = res;
      dispatch({ type: DELETE_PRODUCT, id, headers });
    })
    .catch( err => {
      const message = err.response.data.errors;
      dispatch(setHeaders(err.headers));
      dispatch(setFlash(message, 'red'));
    })
  }
}
