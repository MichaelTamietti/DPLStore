import react from 'react';
import { setFlash } from './flash';
import { setHeaders } from './headers';
import axios from 'axios';

export const GET_PRODUCT = 'GET_PRODUCT';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const EDIT_PRODUCT = 'EDIT_PRODUCT';

const axiosConfigs = {
  headers: { 'content-type': 'multipart/form-data' }
}

export const addProduct = (product) => {
  return(dispatch) => {
    let formData = new FormData();

    Object.keys(product).forEach( key => {
      formData.append(key, product[key])
    })

   axios.post(`/api/products`, formData, axiosConfigs)
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
export const editProduct = (product, id) => {
  return(dispatch) => {
    let formData = new FormData();

    Object.keys(product).forEach( key => {
      formData.append(key, product[key])
    })

    axios.put(`/api/products/${id}`, product, formData, axiosConfigs)
      .then( res => {
        dispatch({ type: EDIT_PRODUCT, product: res.data})
      })
      .catch( err => {
        const message = err.resonse.data.errors;
        dispatch(setHeaders(err.headers));
        dispatch(setFlash(message, 'red'));
      })
  }
}
